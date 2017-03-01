## Table of contents

- [Setup PostgreSQL database](#setup-postgresql-database)

## Setup PostgreSQL database

```shell
##### NOTE: Change "APPNAME" to your app's name
##### NOTE: The password you type in here will be the one to put in your my_app/current/config/database.yml
sudo su - postgres
createuser --pwprompt deploy
createdb -O deploy APPNAME_production
exit
```
