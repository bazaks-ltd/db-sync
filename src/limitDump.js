const fs = require("fs");
const path = require("path");
const config = require("../config/config");
const sortedDumpFiles = require("./utils/sortedDumpFiles");
const dumpDir = `./dump`;


module.exports = function limitDump() {
    const dumpLimit = config.get("dump.limit");
    const dumpFiles = sortedDumpFiles();
    
    while(dumpFiles.length > dumpLimit) {        
        fs.rmSync(path.join(dumpDir, dumpFiles.pop()));
    }
}