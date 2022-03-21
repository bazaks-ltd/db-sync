const fs = require("fs");
const os = require("os");
const path = require("path");
const config = require("../config/config");
const pgpassFile = path.join(os.homedir(), ".pgpass");

function checkPgPassFile() {
  console.log(">>>pgpass");
  console.log(pgpassFile);
  if (fs.existsSync(pgpassFile)) {
    console.log(`pgpass: exists in directory`);
  } else {
    fs.closeSync(fs.openSync(pgpassFile, 'w'))
    console.log(`pgpass: creating in directory`);
  }
}

function checkPgPassString() {
  if (!config.get("src.db.pass")) {
    throw ">>> pgpass: no password suplied";
  }
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
