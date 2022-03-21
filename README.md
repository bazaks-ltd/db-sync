# db-sync
The goal of this project is to sync between prod and local or another sandbox database. Currently support is only for Postgres database.

# Modularity
This project is being modular because of different needs. It can run on your local machine or on a docker container using the linux system.

```
node index.js <action>
or yarn <action>
```
actions 

```
module.exports = {
    backup,
    limitDump,
    pgpass,
    restore,
    sshTunnel
}
```

# Functions overview   

## backup
**command:** `node index.js backup`

This is backup from the source database. We should provide these in the env variables
```
SRC_DB_HOST= source host or ip
SRC_DB_PORT= source port e.g 5436
SRC_DB_USER= source database user name
SRC_DB_PASS= source database password
SRC_DB_NAME= source database name
```
## limitDump
## pgpass,
## restore,
## sshTunnel



# Refactoring 
- remove the execute library with normal node exec dependency
