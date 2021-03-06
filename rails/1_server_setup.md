**Note:** This is the condensed version of the server setup section in [Deploy Ruby On Rails on
Ubuntu 16.04](https://gorails.com/deploy/ubuntu/16.04)

## Table of contents

- [Setup Digital Ocean server](#setup-digital-ocean-server)
- [Log in to server and add server user account](#log-in-to-server-and-add-server-user-account)
- [Add SSH key](#add-ssh-key)
- [Instal Ruby](#instal-ruby)
- [Instal rbenv](#instal-rbenv)
- [Instal Nginx](#instal-nginx)
  - [Edit Nginx config](#edit-nginx-config)
  - [Edit Passenger config](#edit-passenger-config)
- [Instal PostgreSQL](#instal-postgresql)
- [Restart site](#restart-site)

## Setup Digital Ocean server

1. Login to https://cloud.digitalocean.com/login 
1. Select *Create a droplet* 
1. Select *Ubuntu 16.04 LTS x64*
1. Select *$10/month*
1. Choose a hostname
1. Add a staging A record to DNS

## Log in to server and add server user account

1. Check your email inbox for IP address and password
1. In terminal, log into server by entering: `ssh root@IPADDRESS`
1. Are you sure you want to continue connecting? `yes`
1. Enter password twice
1. Enter new password twice
1. `sudo adduser deploy && sudo adduser deploy sudo && su deploy`
1. Press enter 5 times
1. `y`

## Add SSH key

```shell
###### NOTE: Do this on local computer (Mac) and change IPADDRESS
brew install ssh-copy-id
ssh-copy-id deploy@IPADDRESS

# When prompted, enter your password
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

```shell
sudo apt-key adv --keyserver hkp://keyserver.ubuntu.com:80 --recv-keys 561F9B9CAC40B2F7 && sudo apt-get install -y apt-transport-https ca-certificates

# Add Passenger APT repository
sudo sh -c 'echo deb https://oss-binaries.phusionpassenger.com/apt/passenger xenial main > /etc/apt/sources.list.d/passenger.list'
sudo apt-get update

# Install Passenger & Nginx
sudo apt-get install -y nginx-extras passenger && sudo service nginx start
```

Open up the server's IP address in your browser to make sure that nginx is up and running.
To restart or stop your server, use `sudo service nginx restart` or `sudo service nginx stop` respectively.

### Edit Nginx config

```shell
sudo nano /etc/nginx/nginx.conf
```

Find and uncomment the lines:

```shell
##
# Phusion Passenger
##
# Uncomment it if you installed ruby-passenger or ruby-passenger-enterprise
##

include /etc/nginx/passenger.conf;
```

### Edit Passenger config

```shell
sudo nano /etc/nginx/passenger.conf
```

Find and set the lines:

```shell
passenger_ruby /home/deploy/.rbenv/shims/ruby;
```

Restart the server:

```shell
sudo service nginx restart
```

## Instal PostgreSQL

```shell
sudo apt-get install postgresql postgresql-contrib libpq-dev
```

## Restart site

```shell
###### NOTE: Change APPNAME
touch APPNAME/current/tmp/restart.txt
```
