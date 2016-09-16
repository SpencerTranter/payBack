'use strict';

const express = require('express');
const app = express();
app.use(express.static('public'));
app.set('view engine', 'ejs');

const methodOverride = require('method-override');
app.use(methodOverride('_method'));

const bodyParser = require("body-parser");
// Extended no longer has default value so must be set
app.use(bodyParser.urlencoded({ extended: true }));

// Set default port as 8080
const PORT = process.env.PORT || 8080;

const dataBase = require("/db.js");


app.get("/", (req, res) => {
  res.redirect("/ious_index");
});

app.get("/ious", (req, res) => {
  res.render("ious_index");
});

app.get("/ious/new", (req, res) => {
  res.render("ious_new");
});

app.get("/ious/:id", (req, res) => {
  res.render("ious_edit");
});


// Initiate server
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}!`);
});