const fs = require("fs");
const os = require("os");
const path = require("path");
const config = require("../config/config");
const pgpassFile = path.join(os.homedir(), ".pgpass");

function checkPgPassFile() {
  if (fs.existsSync(pgpassFile)) {
    console.log(`pgpass: exists in directory`);
  } else {
    fs.mkdirSync(pgpassFile);
  }
}

function checkPgPassString() {
  console.log(config.get("src.db.pass"));
  if (!config.get("src.db.pass")) {
    throw ">>> pgpass: no password suplied";
  }
  /**
   * host:port:db_name:user_name:password
   * *:*:*:postgres:myadmin:Str0ngP@ssw0rd
   */
  const pgStr = `\n${config.get("src.db.host")}:*:${config.get(
    "src.db.name"
  )}:${config.get("src.db.user")}:${config.get("src.db.pass")}`;

  if (fs.readFileSync(pgpassFile).indexOf(pgStr) >= 0) {
    console.log(">>> pgpass: contains password");
  } else {
    console.log(">>> pgpass: no password found");
    fs.appendFileSync(pgpassFile, pgStr);
  }
  return;
}

function pgpass() {
  console.log(">>> pgpass: start");
  checkPgPassFile();
  checkPgPassString();
  console.log("<<< pgpass: end");
}

module.exports = pgpass;
