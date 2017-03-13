**Note:** This is the condensed version of the app deployment section in [Deploy Ruby On Rails on
Ubuntu 16.04](https://gorails.com/deploy/ubuntu/16.04)

## Table of contents

- [Setup PostgreSQL database](#setup-postgresql-database)
- [Setup DNS](#setup-dns)
- [Add Nginx host](#add-nginx-host)
- [Add secrets and database files](#add-secrets-and-database-files)
- [Each time after](#each-time-after)

## Setup PostgreSQL database

```shell
##### NOTE: Change "APPNAME" to your app's name
##### NOTE: The password you type in here will be the one to put in your my_app/current/config/database.yml
sudo su - postgres 
createuser --pwprompt deploy
createdb -O deploy APPNAME_staging
createdb -O deploy APPNAME_production
exit
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

## Add Nginx host

*NOTE: If this is the first time, run `sudo rm /etc/nginx/sites-enabled/default`. Also, change greganswer.com to your site name

On server run `sudo nano /etc/nginx/sites-enabled/greganswer.com` and add the following


```shell
##### NOTE: Change DOMAIN_NAME and APPNAME
server {
        listen 80;
        listen [::]:80;

        server_name staging.greganswer.com;
        passenger_enabled on;
        rails_env    staging;
        root         /home/deploy/staging.greganswer/current/public;

        # redirect server error pages to the static page /50x.html
        error_page   500 502 503 504  /50x.html;
        location = /50x.html {
            root   html;
        }
}
server {
        listen 80;
        listen [::]:80;

        server_name greganswer.com;
        passenger_enabled on;
        rails_env    production;
        root         /home/deploy/greganswer/current/public;

        # redirect server error pages to the static page /50x.html
        error_page   500 502 503 504  /50x.html;
        location = /50x.html {
            root   html;
        }
}
```

Save the file then run `sudo nginx -t -c /etc/nginx/nginx.conf` to test for errors.

## Add secrets and database files

In app directory on local machine run `bundle exec cap production deploy`

```shell
##### NOTE: Change APPNAME

cd /home/deploy/APPNAME/shared/config
touch database.yml secrets.yml
```

```yml
##### NOTE: Change PASSWORD
# nano database.yml
<% app_name = Rails.application.class.parent.to_s.underscore %>

production:
  password: PASSWORD
  adapter: postgresql
  host: localhost
  port: 5432
  username: deploy
  encoding: unicode
  database: <%= app_name + '_' + Rails.env %>
  pool:     5
  timeout:  5000
```

On local machine run `rake secret` and copy the output

```shell
##### NOTE: Change YOUR_SECRET_KEY
# nano secrets.yml

production:
  secret_key_base: YOUR_SECRET_KEY
```

In app directory on local machine run `cap production deploy` again

## Each time after

Any time you want to deploy simply run `cap staging deploy` or `cap production deploy`
