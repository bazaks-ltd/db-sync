const config = require("../../config/config");

module.exports = function backupFileName(date = Date.now()) {
    return `dump/${config.get("src.db.name")}-${date}.dump`;
}