const express = require('express');
const bodyParser = require('body-parser');
const indexRoutes = express.Router();
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/todo-list-fullstack');
indexRoutes.use(bodyParser.json());
indexRoutes.use(bodyParser.urlencoded({ extended: false }));
const Todo = require('../models/todo');

indexRoutes.get('/', (request, response) => {
  response.render('index.ejs', {
    documentTitle: "Todo List",
    todos: Todo.find()
  })
})
indexRoutes.post('/', (request, response) => {
  let todo = new Todo(request.body);
  todo.save((err, createdTodoObject) => {
    if (err) {
      console.log("index error: " + err);
      response.sendStatus(500);
    }
    response.status(200).send(createdTodoObject);
  });
});

module.exports = indexRoutes;
