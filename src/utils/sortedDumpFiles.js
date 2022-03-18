
const fs = require("fs");
const path = require("path");
const dumpDir = `./dump`;


function sortedDumpFiles() {

    return fs.readdirSync(dumpDir)
    .map(file => ({file, stat:fs.statSync(path.join(dumpDir,file))}))
    .map(fstat=>({file: fstat.file, ctime: fstat.stat.ctime}))
    .sort((a, b) => b.ctime - a.ctime)
    .map(sorted => sorted.file);
    
}

module.exports = sortedDumpFiles;