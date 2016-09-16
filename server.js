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

// Initiate server
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}!`);
});