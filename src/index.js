const backup = require("./backup")
const limitDump = require("./limitDump")
const pgpass = require("./pgpass")
const restore = require("./restore")


module.exports = {
    backup,
    limitDump,
    pgpass,
    restore
}