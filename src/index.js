require('dotenv').config();

var config = require('../config/config');
console.log(config.get('dst.db.host'));


