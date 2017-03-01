## Table of contents

- [Setup Digital Ocean server](#setup-digital-ocean-server)
- [Instal Ruby](#instal-ruby)
- [Instal Nginx](#instal-nginx)
- [Instal PostgreSQL](#instal-postgresql)
- [Setup Capistrano](#setup-capistrano)
- [Add Nginx host](#add-nginx-host)
- [Connect database](#connect-database)
- [Restart site](#restart-site)

## Setup Digital Ocean server

1. Login to https://cloud.digitalocean.com/login 
1. Select *Create a droplet* 
1. Select *Ubuntu 16.04 LTS x64*
1. Select *$10/month*
1. Choose a hostname

## Add server user account

```shell
# On server
sudo adduser deploy && sudo adduser deploy sudo && su deploy
```

## Add SSH key

```shell
###### NOTE: Do this on local computer (Mac) and change IPADDRESS
brew install ssh-copy-id
ssh-copy-id deploy@IPADDRESS
```

To test the connection, open a new terminal window and run `ssh deploy@IPADDRESS`.

## Instal Ruby

```shell
# On Server
sudo apt-get update && sudo apt-get install git-core curl zlib1g-dev build-essential libssl-dev libreadline-dev libyaml-dev libsqlite3-dev sqlite3 libxml2-dev libxslt1-dev libcurl4-openssl-dev python-software-properties libffi-dev nodejs
```

## Instal rbenv

```shell
cd && git clone https://github.com/rbenv/rbenv.git ~/.rbenv && echo 'export PATH="$HOME/.rbenv/bin:$PATH"' >> ~/.bashrc && echo 'eval "$(rbenv init -)"' >> ~/.bashrc && exec $SHELL 
git clone https://github.com/rbenv/ruby-build.git ~/.rbenv/plugins/ruby-build && echo 'export PATH="$HOME/.rbenv/plugins/ruby-build/bin:$PATH"' >> ~/.bashrc && exec $SHELL 

##### NOTE: Grab a coffee for this one...
rbenv install 2.4.0 && rbenv global 2.4.0 && gem install bundler
```

## Instal Nginx

## Instal PostgreSQL

## Setup Capistrano

## Add Nginx host

## Connect database

## Restart site

```shell
###### NOTE: Change APPNAME
touch APPNAME/current/tmp/restart.txt
```
