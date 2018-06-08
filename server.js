const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
// Importing Routes
const users = require("./routes/api/users");
const profile = require("./routes/api/profile");
const posts = require("./routes/api/posts");

const app = express(); // Closures

// Body Parser
// parse application/x-www-form-url fulllencoded
app.use(bodyParser.urlencoded({ extended: false }));
// parse application/json
app.use(bodyParser.json());

const db = require("./config/keys").mongoURI; // Require DB

mongoose
  .connect(db)
  .then(() => console.log("Mongodb  connected!"))
  .catch(error => console.log(error)); // Connect with MongoDB

app.get("/", function(req, res) {
  return res.send("Hello");
});
// Call Routes

app.use("/api/users", users);
app.use("/api/profile", profile);
app.use("/api/posts", posts);

const port = process.env.PORT || 5000;

app.listen(port, function() {
  return console.log(`Voila! Server running @Port ${port}`);
});
