## Table of contents

<!-- MarkdownTOC -->

- [Installation](#installation)
- [Connecting](#connecting)
- [Postgres shell commands](#postgres-shell-commands)
- [Postgres commands](#postgres-commands)
- [References](#references)

<!-- /MarkdownTOC -->
 
### Installation

```shell
# Install it through Homebrew
brew install postgres

# Make PostgreSQL launch on startup
ln -sfv /usr/local/opt/postgresql/*.plist ~/Library/LaunchAgents

# Launch PostgreSQL right now
launchctl load ~/Library/LaunchAgents/homebrew.mxcl.postgresql.plist

# Create a database based on your computer username
createdb `whoami`

# Install PGweb web based PostgreSQL UI
brew cask install pgweb

# Open in web browser with connection wizard
pgweb

# OR connect to your default database
pgweb --host localhost --user `whoami` --db `whoami`
```

### Connecting

Connecting to a database

```shell
$ psql postgres     # the default database
$ psql database_name
```

Connecting as a specific user

```shell
$ psql postgres john
$ psql -U john postgres
```

Connecting to a host/port (by default psql uses a unix socket)

```shell
$ psql -h localhost -p 5432 postgres
```

You can also explicitly specify if you want to enter a password `-W` or not `-w`

```shell
$ psql -w postgres
$ psql -W postgres
Password:
```

One thing to note here is that by default users created with CREATE ROLE can’t log in. To allow login you need to provide the LOGIN attribute

```shell
postgres=# CREATE ROLE john LOGIN;
postgres=# CREATE USER john;            # alternative to CREATE ROLE which adds the LOGIN attribute
```

You can also add the LOGIN attribute with ALTER ROLE

```shell
postgres=# ALTER ROLE john LOGIN;
postgres=# ALTER ROLE john NOLOGIN;   # remove login
```

### Postgres shell commands

Task                     | Command
-----------------------: | ----------------------
Create database          | createdb database_name
Create user with login   | createuser username

### Postgres commands

Task                     | Command
-----------------------: | -------------------------------------
Connect to database      | \c database_name
.                        | .
Create database          | CREATE DATABASE database_name;
Create table             | CREATE TABLE table_name;
Create user with login   | CREATE USER username;
.                        | .
Delete data in table     | DELETE FROM table_name WHERE condition;
Truncate table           | TRUNCATE table_name;
.                        | .
Drop database            | DROP DATABASE [ IF EXISTS ] database_name;
Drop table               | DROP TABLE [ IF EXISTS ] table_name;
Drop user                | DROP USER user_name;
.                        | .
Edit in $EDITOR          | \e
Help (Postgres commands) | \?
Help (SQL commands)      | \h
List databases           | \l
List roles               | \du
List tables              | \d
Schema for table         | \d table_name

Force drop a database:

```sql
update pg_database set datallowconn = 'false' where datname = 'issuetracker_development';
SELECT pg_terminate_backend(pid) FROM pg_stat_activity WHERE datname = 'issuetracker_development';
DROP DATABASE issuetracker_development;
```

### References

- [PostgreSQL basics](http://blog.trackets.com/2013/08/19/postgresql-basics-by-example.html)
