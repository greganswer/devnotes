const express = require('express');

let app = express();

app.get('/', (req, res) => {
  // res.send('hello world');
  res.status(404).send({
    error: 'Page not found.',
    name: 'Todo App v1.0'
  });
});

app.get('/users', (req, res) => {
  res.send([
    { name: 'Mike', age: 23 },
    { name: 'John', age: 33 },
    { name: 'Jen', age: 25 }
  ]);
});

app.listen(3000);
module.exports.app = app;
