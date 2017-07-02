#### /index.js file

```javascript
const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => res.sendFile(__dirname + '/index.html'));
app.get('*', (req, res) => res.send('404 - Not found'));
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
```
