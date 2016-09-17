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

const MongoClient = require('mongodb').MongoClient;
const MONGODB_URI = 'mongodb://localhost:27017/ious';
const payBack = require('./payBack.js');

// Set default port as 8080
const PORT = process.env.PORT || 8080;

let db;
MongoClient.connect(MONGODB_URI, (err, dbInstance) => {
  if (err) {
    console.log('Could not connect to the database! Details below.', err, 'The application will now exit.');
    process.exit();
  }
  db = dbInstance;

  app.get("/", (req, res) => {
    res.redirect("/ious");
  });

  app.get("/ious", (req, res) => {
    payBack.getIOUs(db, (err, IOUs) => {
      let templateVars = { ious: IOUs };
      res.render('ious_index', templateVars);
    });
  });

  app.get("/ious/new", (req, res) => {
    res.render("ious_new");
  });

  app.get("/ious/:id", (req, res) => {
    let iou = { id: req.params.id };
    payBack.getIOU(db, iou, (err, result) => {
      let templateVars = { iou: result };
      res.render("ious_edit", templateVars);
    });
  });

  app.post('/ious', (req, res) => {
    let iou = {
      title: req.body.title,
      description: req.body.description,
      dateDue: '2016-12-05'
    };
    payBack.insertIOU(db, iou, (err, result) => {
      res.redirect('/ious');
    });
  });

  // Initiate server
  app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}!`);
  });
});