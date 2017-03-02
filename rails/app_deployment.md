## Table of contents

- [Setup PostgreSQL database](#setup-postgresql-database)
- [Setup Capistrano](#setup-capistrano)
- [Setup DNS](#setup-dns)

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

## Setup DNS

The Domain Name Server . Login to your Domain Name Registrar, click on *Manage site* or *Manage DNS* or something similar, and under Nameservers add the following custom nameservers:

1. ns1.digitalocean.com
1. ns2.digitalocean.com
1. ns3.digitalocean.com

The domain registry communicates the nameserver changes with your Internet Service Provider, so that they can cache the new nameservers to ensure quick site connections. This process usually takes 30-45 minutes, but could take up to a few hours depending on your registry and ISP's communication methods.

1. Go to https://cloud.digitalocean.com/networking/domains
1. In *Hostname* enter *@*
1. In *Will direct to* select desired droplet
1. Click *Create record*
1. In a terminal window `ping WEB_ADDRESS`

For more info reference https://www.digitalocean.com/community/tutorials/how-to-set-up-a-host-name-with-digitalocean
