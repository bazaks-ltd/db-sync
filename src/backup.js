const {execute} = require('@getvim/execute');
var config = require('../config/config');
const backupFileName = require('./utils/backupFileName');

module.exports = function backup() {
    execute(`pg_dump -O -x -v -Fc -Z 9 \
    -d ${config.get("src.db.name")} \
    -h ${config.get("src.db.host")} \
    -p ${config.get("src.db.port")}  \
    -U ${config.get("src.db.user")}  \
    > ${backupFileName()}`,).then(async () => {
        console.log("ine fini");
    }).catch(err => {
        console.log(err);
    })
}
