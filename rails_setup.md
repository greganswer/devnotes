## Table of contents

- [Install or update Homebrew](#install-or-update-homebrew)
- [Install or update rbenv](#install-or-update-rbenv)
- [Install Ruby](#install-ruby)
- [Install Rails](#install-rails)
- [Install or update PostgreSQL](#install-or-update-postgresql)
- [Create new app](#create-new-app)
- [Setup Pow](#setup-pow)

## Install or update Homebrew

```shell
ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"
```

**OR**

```shell
brew update && brew cleanup && brew cask cleanup && brew doctor
```

## Install or update rbenv

```shell
brew install rbenv ruby-build

# Add rbenv to bash so that it loads every time you open a terminal
echo 'if which rbenv > /dev/null; then eval "$(rbenv init -)"; fi' >> ~/.bash_profile && source ~/.bash_profile
```

**OR**

```shell
brew upgrade rbenv ruby-build
```

## Install Ruby

```shell
rbenv install 2.4.0 && rbenv global 2.4.0 && ruby -v
```

## Install Rails

```shell
gem install rails -v 5.0.1 && rbenv rehash && rails -v
```

## Install or update PostgreSQL

```shell
brew install postgresql
```

**OR**

```shell
brew upgrade postgresql
```

```shell
# To have launchd start postgresql at login and load postgresql now:
ln -sfv /usr/local/opt/postgresql/*plist ~/Library/LaunchAgents && launchctl load ~/Library/LaunchAgents/homebrew.mxcl.postgresql.plist
```

By default the postgresql user is your current OS X username with no password. For example, my OS X user is named `greg` so I can login to postgresql with that username.

## Create new app

```shell
#### If you want to use Postgres
# Note you will need to change config/database.yml's username to be the same as your OSX user account. (for example, mine is 'greg')
rails new myapp -d postgresql

# Move into the application directory
cd myapp

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
