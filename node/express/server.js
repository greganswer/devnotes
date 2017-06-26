const express = require("express");
const app = express();
const request = require("request");
const hbs = require('hbs');
const fs = require('fs');

const port = process.env.PORT || 3000;

hbs.registerPartials(__dirname + '/views/partials');
app.set('view engine', 'hbs');

app.use((req, res, next) => {
  let now = new Date().toString();
  let log = `${now}: ${req.method} ${req.url}`;
  fs.appendFile('server.log', log + '\n', (err) => {
    if (err) {
      console.log('Unable to append to server.log.');
    }
  })
  next();
});

// app.use((req, res, next) => res.render('maintenance.hbs'));

app.use(express.static(__dirname + '/public'));

hbs.registerHelper('getCurrentYear', () => new Date().getFullYear());
hbs.registerHelper('screamIt', (text) => text.toUpperCase(text));

app.get("/", (req, res) => {
  res.render('home.hbs', {
    pageTitle: 'Home page',
    welcomeMessage: "Welcome to some site",
  });
});

app.get("/about", (req, res) => {
  res.render('about.hbs', {
    pageTitle: 'About page',
  });
});

app.get("*", (req, res) => res.send("404 - Not found"));
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
