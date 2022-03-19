const { execute } = require("@getvim/execute");
const config = require("../config/config");
const sortedDumpFiles = require("./utils/sortedDumpFiles");


function restore() {
    const dumpFiles = sortedDumpFiles();
    if (dumpFiles.length > 0) {
        const latest = dumpFiles[0];
        
        execute(`pg_restore -O -x -v -j 8 \
        -d ${config.get("dst.db.name")} \
        -h  ${config.get("dst.db.host")} \
        -p  ${config.get("dst.db.port")} \
        -U  ${config.get("dst.db.user")} \
        ${latest}`).then(() => {
            console.log(`ine fini restore`);
        }).catch((e) => {
            console.log(err);
        })
    } else {
        //nothing to restore
    }
}

module.exports = restore;