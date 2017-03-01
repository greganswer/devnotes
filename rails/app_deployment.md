## Table of contents

- [Setup PostgreSQL database](#setup-postgresql-database)
- [Setup Capistrano](#setup-capistrano)

## Setup PostgreSQL database

```shell
##### NOTE: Change "APPNAME" to your app's name
##### NOTE: The password you type in here will be the one to put in your my_app/current/config/database.yml
sudo su - postgres
createuser --pwprompt deploy
createdb -O deploy APPNAME_production
exit
```

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
