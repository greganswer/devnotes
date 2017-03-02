## Table of contents

- [Create new app](#create-new-app)
- [Setup Capistrano](#setup-capistrano)
- [Initialize Git](#initialize-git)
- [Protect secrets and database](#protect-secrets-and-database)
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

## Setup Capistrano

> **NOTE:** Make sure you do the following steps on your development machine inside your Rails app

```ruby
# Add to Gemfile

gem 'capistrano', '~> 3.7', '>= 3.7.1'
gem 'capistrano-rails', '~> 1.2'
gem 'capistrano-passenger', '~> 0.2.0'
gem 'capistrano-rbenv', '~> 2.1'
```

```shell
cap install STAGES=production,staging
```

```ruby
# Add to Capfile

require 'capistrano/rails'
require 'capistrano/passenger'
require 'capistrano/rbenv'

set :rbenv_type, :user
set :rbenv_ruby, '2.4.0'
```

```ruby
###### NOTE: change APPNAME and USERNAME
# config/deploy.rb

set :application, "APPNAME"
set :repo_url, "git@example.com:USERNAME/APPNAME.git"

set :deploy_to, '/home/deploy/APPNAME'

append :linked_files, "config/database.yml", "config/secrets.yml"
append :linked_dirs, "log", "tmp/pids", "tmp/cache", "tmp/sockets", "vendor/bundle", "public/system", "public/uploads"
```

```ruby

###### NOTE: Replace 127.0.0.1 with your server's IP address!
# config/deploy/production.rb
# config/deploy/staging.rb
server '127.0.0.1', user: 'deploy', roles: %w{app db web}
```

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

## Protect secrets and database

echo "config/database.yml\nconfig/secrets.yml" >> .gitignore
git add .gitignore
git mv config/secrets.yml config/secrets.yml.example
git mv config/database.yml config/database.yml.example
git commit -m "Only store example secrets and database configs"
cp config/secrets.yml.example config/secrets.yml
cp config/database.yml.example config/database.yml

## Initialize Git

```shell
git init && git add -A && git commit -m 'Initialize Repository'
```

1. Setup Remote repository at https://github.com/new
1. Enter project name
1. Enter discription
1. Select public or private
1. Click *Create repository*
1. copy the code from *…or push an existing repository from the command line* and paste in the command line