var fs = require('fs');
var util = require('util');
var log_file = fs.createWriteStream('config/debug.log', {flags : 'w'});
var log_stdout = process.stdout;

function log (d) {
  log_file.write(util.format(new Date().toISOString(),d) + '\n');
  log_stdout.write(util.format(d) + '\n');
};

module.exports = log;