var express = require('express');
var bodyParser = require('body-parser');
// var moment = require('moment');

var { mongoose } = require('./db/mongoose');
var { ObjectId } = require('mongodb');
var { Todo } = require('./models/todos');
var { User } = require('./models/user');

var port = process.env.PORT || 3000;

var app = express();

// middleware
app.use(bodyParser.json());
// app.use();

app.post('/todos', (req, res) => {
  var todo = new Todo({
    text: req.body.text,
    completed: false,
    completedAt: 123
  });
  todo.save().then((doc) => {
    res.send(doc);
  }, (err) => {
    res.status(400).send(err);
  });
});
app.get('/todos', (req, res) => {
  Todo.find().then((todos) => {
    res.send({ todos });
  }, (e) => {
    res.status(400).send(e);
  });
});
// GET /todos/123456
app.get('/todos/:id', (req, res) => {
  var id = req.params.id;
  if (!ObjectId.isValid(id)) {
    return res.status(404).send();
  }
  Todo.findById(id).then(todo => {
    if (!todo) {
      return res.status(404).send();
    }
    res.send({todo});
  }).catch(err => {
    res.status(400).send();
  })
});

app.listen(port, () => {
  console.log(`server is up on ${port}`);
});

module.exports = {app};