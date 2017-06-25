const express = require('express');
const app = express();

app.use(express.static("public"))
app.set("view engine", "ejs")

app.get("/", (req, res) => {
  res.render("home");
});

app.get("/friends", (req, res) => {
  let friends = ["Tony", "John", "Mary"];
  res.render("friends", {
    friends: friends
  });
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
