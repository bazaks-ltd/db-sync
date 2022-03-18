const {execute} = require('@getvim/execute');
var config = require('../config/config');

const pgpass = require('./pgpass');

function backupFileName() {
    const date = new Date();
    const currentDate = `${date.getFullYear()}.${date.getMonth() + 1}.${date.getDate()}.${date.getHours()}.${date.getMinutes()}`;
    return `dump/${config.get("src.db.name")}-${currentDate}.dump`;
}

function backup() {
    execute(`pg_dump -O -x -v -Fc -Z 9 \
    -d ${config.get("src.db.name")} \
    -h ${config.get("src.db.host")} \
    -p ${config.get("src.db.port")}  \
    -U ${config.get("src.db.user")}  \
    > ${backupFileName()}`,).then(async () => {
        console.log("ine fini");
    }).catch(err => {
        console.log(err);
        execute(`rm -rf ${fileName}`);
    })
}

pgpass();
backup();