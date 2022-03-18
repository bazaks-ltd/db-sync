const dotenv = require('dotenv');
dotenv.config();
var convict = require('convict');
var config = convict({
    src: {
        db: {
            user: {
                format: String,
                default: '',
                env: 'SRC_DB_USER'
            },
            pass: {
                format: String,
                default: '',
                env: 'SRC_DB_PASS'
            },
            name: {
                format: String,
                default: '',
                env: 'SRC_DB_NAME'
            },
            host: {
                format: '*',
                default: '',
                env: 'SRC_DB_HOST'
            }, 
            port: {
                format: 'port',
                default: 5432,
                env: 'PORT',
                env: 'SRC_DB_PORT'
            },
            tunnel: {
                format: 'Boolean',
                default: false,
                env: 'SRC_TUNNEL'
            }
        }
    },
    dst: {
        db: {
            user: {
                format: String,
                default: '',
                env: 'DST_DB_USER'
            },
            pass: {
                format: String,
                default: '',
                env: 'DST_DB_PASS'
            },
            name: {
                format: String,
                default: '',
                env: 'SRC_DB_NAME'
            },
            host: {
                format: '*',
                default: '',
                env: 'DST_DB_HOST'
            }, 
            port: {
                format: 'port',
                default: 80,
                env: 'DST_DB_PORT'
            },
            tunnel: {
                format: 'Boolean',
                default: false,
                env: 'DST_TUNNEL'
            }
        }
    },
    dump: {
        limit: {
            format: 'int',
            default: 10,
            env: 'DB_DUMP_LIMIT'
        }
    }
});

module.exports = config;