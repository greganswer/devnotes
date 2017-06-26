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

#### App debugging

Add this after the code you wish to debug

```javascript
debugger;
```

to debug from Google Chrome

```bash
nodemon --inspect-brk APP_NAME
```

Then in Chrome enter `chrome://inspect` in a new tab and click `Open dedicated DevTools for Node`

To debug from the command line

```bash
nodemon inspect APP_NAME

# list the 10 lines above and below the place we are paused
list(10)

# Go to the next statement
n

# Continue to run your program untill the next `debugger` statement or the program finishes
c

# Enter REPL (Read Evaluate Print Loop)
repl

```

#### Pretty print objects in the console

```javascript
JSON.stringify(body, undefined, 2)
```
