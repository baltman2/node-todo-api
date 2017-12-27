const express = require('express');
const bodyParser = require('body-parser');
const _ = require('lodash');
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
// DELETE
app.delete('/todos/:id', (req, res) => {
  var id = req.params.id;
  if (!ObjectId.isValid(id)) {
    return res.status(404).send();
  }
  Todo.findByIdAndRemove(id).then(doc => {
    if (!doc) {
      return res.status(404).send();
    }
    res.send({DELETED: doc});
  }).catch(err => {
    res.status(400).send();
  });
});

app.patch('/todos/:id', (req, res) => {
  var id = req.params.id;
  var body = _.pick(req.body, ['text', 'completed']);
  if (!ObjectId.isValid(id)) {
    return res.status(404).send();
  }
  if (_.isBoolean(body.completed) && body.completed) {
    body.completedAt = new Date().getTime();
  } else {
    body.completed = false;
    body.completedAt = null;
  }
  Todo.findByIdAndUpdate(id, {$set: body}, {new: true})
    .then(todo => {
      if (!todo) {
        return res.status(404).send();
      }
      res.send({todo});
    })
    .catch(err => res.status(400).send());
});

app.listen(port, () => {
  console.log(`server is up on ${port}`);
});

module.exports = {app};