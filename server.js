const express = require('express');
const path = require('path');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/todo-list-fullstack');
const app = express();
const indexRoute = require('./routes/index');

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(morgan('tiny'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));
app.use('/', indexRoute);

app.listen(3000, () => {
  console.log("I am listening");
})

module.exports = app;
