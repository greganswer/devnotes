#### /index.js file

```javascript

/require('./config/config');

// Modules

const { ObjectID } = require('mongodb');
const express = require('express');
const bodyParser = require('body-parser');
const _ = require('lodash');
const app = express();
app.use(bodyParser.json());

// Local

const PORT = process.env.PORT || 3000;
const ENV = process.env.NODE_ENV || 'development';
const { mongoose } = require('./db/mongoose');

// Routes

app.get('/', (req, res) => res.sendFile(__dirname + '/index.html'));

/
// Final

let message = `Server is running on port ${PORT} in ${ENV}`;
app.get('*', (req, res) => res.send('404 - Not found'));
app.listen(PORT, () => console.log(message));

module.exports = { app };
```

#### /config/config.js file

```javascript
let env = process.env.NODE_ENV || 'development';

if (env === 'development' || env === 'test') {
  let config = require('./config.json');
  let envConfig = config[env];

  Object.keys(envConfig).forEach(key => {
    process.env[key] = envConfig[key];
  });
}

```

#### /db/mongoose.js file

```javascript
var mongoose = require('mongoose');

mongoose.Promise = global.Promise;
mongoose.connect(process.env.MONGODB_URI);

module.exports = { mongoose };

```

#### /package.json file

```json

{
  "name": "todo-api",  // UPDATE THIS
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "start": "node server/server.js", // UPDATE THIS
    "start-dev": "nodemon server/server.js", // UPDATE THIS
    "test": "export NODE_ENV=test || \"SET NODE_ENV=test\" && mocha server/**/*.test.js", // UPDATE THIS
    "test-watch": "nodemon --exec 'npm test'"
  },
  "engines": {
    "node": "8.1.2" // UPDATE THIS
  },
  "author": "",
  "license": "ISC",
}
