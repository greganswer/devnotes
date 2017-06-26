const express = require("express");
const app = express();
const request = require("request");
app.set("view engine", "ejs");

app.get("/", function(req, res) {
  let output = "Sunset in Hawaii is at ";
  let url = 'https://query.yahooapis.com/v1/public/yql?q=select%20astronomy.sunset%20from%20weather.forecast%20where%20woeid%20in%20(select%20woeid%20from%20geo.places(1)%20where%20text%3D%22maui%2C%20hi%22)&format=json&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys'

  request(url, function(error, response, body) {
    if (!error && response.statusCode == 200) {
      let parsedData = JSON.parse(body);
      output += parsedData["query"]["results"]["channel"]["astronomy"]["sunset"];
    }
    res.send(`<h1>${output}</h1`)
  });
});

app.get("/search", function(req, res) {
  res.render("search");
});

app.get("/results", function(req, res) {
  let query = req.query.search;
  let url = "http://omdbapi.com/?apikey=thewdb&s=" + query;
  request(url, function(error, response, body) {
    if (!error && response.statusCode == 200) {
      let data = JSON.parse(body)
      res.render("results", { data: data });
    }
  });
});



app.get("*", (req, res) => { res.send("404 - Not found"); });
app.listen(3000, () => {});
