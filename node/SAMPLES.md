#### /index.js file

```javascript

// Packages

const express = require('express');
const bodyParser = require('body-parser');
const app = express();
app.use(bodyParser.json());

// Local

const PORT = process.env.PORT || 3000;

// Routes

app.get('/', (req, res) => res.sendFile(__dirname + '/index.html'));

// Final

app.get('*', (req, res) => res.send('404 - Not found'));
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
```
