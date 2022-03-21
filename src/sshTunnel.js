const { spawn, exec } = require('child_process');
const fs = require('fs');
const config = require('../config/config');
const os = require('os');
const path = require('path');
const sshConfigPath = path.join(os.homedir(), '.ssh/config');

function writeConfigFile(tunnelConfig) {
    const {
        configName, host, user,
        pkeyFile, dstHost, dstPort, port } =
        tunnelConfig;
    const configStr = `

    Host ${configName}
    HostName ${host}
    User ${user}
    IdentitiesOnly yes
    IdentityFile /app/config/${pkeyFile}
    LocalForward ${port} ${dstHost}:${dstPort};`;

    fs.appendFileSync(sshConfigPath, configStr);
}

function openTunnel(configName) {

    // close existing tunnel first 
    closeTunnel(configName);
    // open the tunnel
    spawn(`ssh -N ${configName} & echo $! > config/${configName}.pid`, {
        detached: true,
        shell: true,
        stdio: 'ignore'
    }).unref();

}

function closeTunnel(configName) {
    //check if process is running and kill it
    let pid = fs.readFileSync(`config/${configName}.pid`).toString();
    pid = parseInt(pid) || false;
    if (pid && process.kill(pid, 0)) {
        process.kill(pid);
    }
}

function sshTunnel() {
    //check src tunnel 
    let srcTunnelConfig = config.get('src.tunnel');
    if (srcTunnelConfig.allow) {
        srcTunnelConfig.configName = 'src-tunnel';
        srcTunnelConfig.pkeyFile = 'tnl_src_idty_file';

        writeConfigFile(srcTunnelConfig);
    }

    //check dst tunnel
    let dstTunnelConfig = config.get('dst.tunnel');
    if (dstTunnelConfig.allow) {
        dstTunnelConfig.configName = 'dst-tunnel';
        dstTunnelConfig.pkeyFile = 'tnl_dst_idty_file';

        writeConfigFile(dstTunnelConfig);
    }
}

module.exports = sshTunnel;
