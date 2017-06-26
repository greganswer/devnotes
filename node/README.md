#### Node.JS Packages

- [nodemon](https://www.npmjs.com/package/nodemon)
  - Embedded JavaScript templates
  - `npm install nodemon -g`
- [express](https://www.npmjs.com/package/express)
  - Fast, unopinionated, minimalist web framework for node.
  - `npm install express --save`
- [ejs](https://www.npmjs.com/package/ejs)
  - Embedded JavaScript templates
  - `npm install ejs --save`
- [body-parser](https://www.npmjs.com/package/body-parser)
  - Embedded JavaScript templates
  - `npm install body-parser --save`


#### Node.JS & Express workflow

```bash
mkdir APP_NAME
cd APP_NAME
npm init
touch app.js
# Or copy an app.js template file and package.json
# Then run `npm install`
npm install --save express ejs body-parser
```

#### Send data from one file to another

```javascript
// In notes.js
module.exports.age = 25;

// In app.js
const notes = require('./notes.js');
const user = os.userInfo();

fs.appendFileSync('greetings.txt', `Hello ${user.username}! You are ${notes.age} `);
```

#### Get arguments from command license

```javascript
process.argv
```
