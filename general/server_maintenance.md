### Update packages

```shell
sudo apt-get dist-upgrade
```

### Install Java 

```shell
sudo apt-get install openjdk-8-jre-headless -y
```

### Install Elasticsearch

```shell
cd /tmp
wget https://artifacts.elastic.co/downloads/elasticsearch/elasticsearch-5.3.1.deb

sudo dpkg -i elasticsearch-5.3.1.deb
sudo service elasticsearch start
```
