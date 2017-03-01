## Table of contents

- [Create new app](#create-new-app)
- [Initialize Git](#initialize-git)
- [Setup Pow](#setup-pow)

## Create new app

```shell
#### NOTE: change APPNAME
# Note you will need to change config/database.yml's username to be the same as your OSX user account. (for example, mine is 'greg')
rails new APPNAME -d postgresql

# Move into the application directory
cd APPNAME

# If you setup the database with a username/password, add the username/password to the config/database.yml file

# Create the database
rake db:create
```

If you received an error that said `Access denied for user 'root'@'localhost' (using password: NO)` then you need to update your config/database.yml file to match the database username and password.

## Setup Pow

[Pow](http://pow.cx/) is a is a zero-config Rack server for Mac OS X. It allows you to directly map folders to a local URL. 

**Example:**
```shell
/root/path/code/projectname -> http://projectname.dev/
```

**Setup:**
```shell
curl get.pow.cx | sh
echo 'export PATH="$HOME/.rbenv/shims:$HOME/.rbenv/bin:$PATH"' >> ~/.powconfig && touch ~/.pow/restart.txt
```

**Additional commands:**

```shell
# Restart the server
touch ~/.pow/restart.txt

# Configure
ln -s /path/to/myapp ~/.pow

# Remove a Link:
cd ~/Library/Application Support/Pow/Hosts
rm link_name
```

#### Accessing Virtual Hosts from Other Computers

Construct your xip.io domain by appending your application's name to your LAN IP address followed by .xip.io. For example, if your development computer's LAN IP address is 10.0.1.43, you can visit myapp.dev from another computer on your local network using the URL: 

```
http://myapp.10.0.1.43.xip.io/
```

## Initialize Git

```shell
git init && git add . && git commit -m 'Initialize Rails.'
```
1. Setup Remote repository at https://github.com/new
1. Enter project name
1. Enter discription
1. Select public or private