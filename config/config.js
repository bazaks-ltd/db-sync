if (process.env.NODE_ENV === 'development') {
    const dotenv = require('dotenv');
    dotenv.config();
}

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
        },
        tunnel: {
            allow: {
                format: 'Boolean',
                default: false,
                env: 'SRC_TUNNEL'
            },
            host: {
                format: '*',
                default: '',
                env: 'SRC_TUNNEL_SSH_HOST'
            },
            port: {
                format: 'port',
                default: 80,
                env: 'SRC_TUNNEL_PORT'
            },
            user: {
                format: String,
                default: '',
                env: 'SRC_TUNNEL_USER'
            },
            dstHost: {
                format: '*',
                default: '',
                env: 'SRC_TUNNEL_DST_HOST'
            },
            dstPort: {
                format: '*',
                default: '',
                env: 'SRC_TUNNEL_DST_PORT'
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
        },
        tunnel: {
            allow: {
                format: 'Boolean',
                default: false,
                env: 'DST_TUNNEL'
            },
            host: {
                format: '*',
                default: '',
                env: 'DST_TUNNEL_SSH_HOST'
            },
            port: {
                format: 'port',
                default: 80,
                env: 'DST_TUNNEL_PORT'
            },
            user: {
                format: String,
                default: '',
                env: 'DST_TUNNEL_USER'
            },
            dstHost: {
                format: '*',
                default: '',
                env: 'DST_TUNNEL_DST_HOST'
            },
            dstPort: {
                format: '*',
                default: '',
                env: 'DST_TUNNEL_DST_PORT'
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