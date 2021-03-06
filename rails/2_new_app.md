**Note:** This is the App setup section in [Setup Ruby On Rails on
Mac OS X 10.11 El Capitan](https://gorails.com/setup/osx/10.11-el-capitan)

## Table of contents

- [Create new app](#create-new-app)
- [Setup Capistrano](#setup-capistrano)
- [Setup Pow](#setup-pow)
  - [Accessing virtual hosts from other computers](#Accessing-virtual-hosts-from-other-computers)
- [Initialize Git](#initialize-git)
- [Initialize specific gems](#initialize-specific-gems)
- [Additional notes](#additional-notes)

## Create new app

```shell
#### NOTE: change APPNAME
# Note you will need to change config/database.yml's username to be the same as your OSX user account. (for example, mine is 'greg')
rails new APPNAME --database postgresql --skip-test --skip-turbolinks

# Move into the application directory
cd APPNAME

# If you setup the database with a username/password, add the username/password to the config/database.yml file

# Create the database
rake db:create
```

### Different version setup

```
# make directory for new rails app
mkdir app
cd app

# install the correct Ruby version
rbenv install 2.3.1
rbenv local 2.3.1
ruby -v

# specify ruby version 
echo 2.3.1 > .ruby-version

# initialize bundler (creates Gemfile)
bundler init

# specify rails version in Gemfile
gem "rails", "4.2.5"

# create rails app using specified version
bundle exec rails new . 
```

If you received an error that said `Access denied for user 'root'@'localhost' (using password: NO)` then you need to update your config/database.yml file to match the database username and password.

## Setup Capistrano

> **NOTE:** Make sure you do the following steps on your development machine inside your Rails app

```ruby
# Add to Gemfile

# Capistrano for automatic deployment
gem 'capistrano', '~> 3.7', '>= 3.7.1'
gem 'capistrano-rails', '~> 1.2'
gem 'capistrano-passenger', '~> 0.2.0'
gem 'capistrano-rbenv', '~> 2.1'
```

```shell
bundle
cap install STAGES=staging,production
```

```ruby
# Replace Capfile with the following:

require "capistrano/setup"
require "capistrano/deploy"
require 'capistrano/rails'
require 'capistrano/passenger'
require 'capistrano/rbenv'
require "capistrano/scm/git"
install_plugin Capistrano::SCM::Git

set :rbenv_type, :user
set :rbenv_ruby, '2.4.0'

# Load custom tasks from `lib/capistrano/tasks` if you have any defined
Dir.glob("lib/capistrano/tasks/*.rake").each { |r| import r }

```

```ruby
###### NOTE: Change APPNAME and change greganswer if necessary
# config/deploy.rb

app_name = 'APPNAME'

set :application, app_name
set :repo_url, "git@github.com:greganswer/#{app_name}.git"

set :deploy_to, "/home/deploy/#{app_name}"

append :linked_files, "config/database.yml", "config/secrets.yml"
append :linked_dirs, "log", "tmp/pids", "tmp/cache", "tmp/sockets", "vendor/bundle", "public/system", "public/uploads"
```

```ruby

###### NOTE: Replace IPADDRESS with your server's IP address!
# config/deploy/production.rb
# config/deploy/staging.rb
server 'IPADDRESS', user: 'deploy', roles: %w{app db web}
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

#### Accessing virtual hosts from other computers

Construct your xip.io domain by appending your application's name to your LAN IP address followed by .xip.io. For example, if your development computer's LAN IP address is 10.0.1.43, you can visit myapp.dev from another computer on your local network using the URL: 

```
http://myapp.10.0.1.43.xip.io/
```

## Initialize Git

```shell
git init && git add .gitignore && git commit -m 'Intialize Repository'
git add . && git commit -m 'Initialize Rails'
```

1. Setup Remote repository at https://github.com/new
1. Enter project name
1. Enter discription
1. Select public or private
1. Click *Create repository*
1. copy the code from *…or push an existing repository from the command line* and paste in the command line


## Initialize specific gems

```shell
rails generate cucumber:install && rails generate rspec:install
```

## Additional notes

- If in terminal and `rails c` fails, run `ln -s /usr/local/opt/readline/lib/libreadline.dylib /usr/local/opt/readline/lib/libreadline.6.dylib`
`
