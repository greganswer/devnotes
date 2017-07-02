#### Installation

1. Go to https://www.mongodb.com/ and click `download`
1. Select `community server` and select your operating system
1. Download and extract the folder
1. Rename the folder to `mongo` and move it to your home directory
1. Create a folder called `mongo-data` in the same directory

Start MongoDB server

```shell
cd ~/mongo/bin
./mongod --dbpath ~/mongo-data
```

Open a console to the DB server (in another tab)

```shell
./mongo
```

#### Install Robomongo

1. Go to https://robomongo.org/download
2. Run the file
3. Click `create`
4. Give it a descriptive name like `Local Mongo Database` and click enter
5. 

#### Mongo commands

```
db.Todos.insert({ text: 'My first task' })
db.Todos.find()
```
