const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static("public"))
app.set("view engine", "ejs")

let friends = ["Tony", "John", "Mary"];

app.get("/", (req, res) => {
  res.render("home");
});

app.get("/friends", (req, res) => {
  res.render("friends", { friends: friends });
});

app.post("/addFriend", (req, res) => {
  let name = req.body.name;
  friends.push(name);
  res.redirect("friends")
});

app.get("/r/:subReddit", (req, res) => {
  res.send(`You are viewing the ${req.params.subReddit}`);
});


app.get("*", (req, res) => {
  res.send("404 - Not found");
});


app.listen(3000, () => {
  console.log("Server started!");
});
