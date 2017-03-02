## Table of contents

- [Setup PostgreSQL database](#setup-postgresql-database)
- [Setup DNS](#setup-dns)
- [Add Nginx host](#add-nginx-host)

## Setup PostgreSQL database

```shell
##### NOTE: Change "APPNAME" to your app's name
##### NOTE: The password you type in here will be the one to put in your my_app/current/config/database.yml
sudo su - postgres 
createuser --pwprompt deploy
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

On server run `sudo nano /etc/nginx/sites-enabled/default` and add the following
*NOTE: If this is the first time, empty the file first.

```shell
##### NOTE: Change DOMAIN_NAME and APPNAME
server {
        listen 80;
        listen [::]:80 ipv6only=on;

        server_name DOMAIN_NAME.com;
        passenger_enabled on;
        rails_env    production;
        root         /home/deploy/APPNAME/current/public;

        # redirect server error pages to the static page /50x.html
        error_page   500 502 503 504  /50x.html;
        location = /50x.html {
            root   html;
        }
}
```
