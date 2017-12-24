const { ObjectID } = require('mongodb');

const { mongoose } = require('./../server/db/mongoose');
const { Todo } = require('./../server/models/todos');
const { User } = require('./../server/models/user');

// Todo.remove({}).then(result => {
//   console.log(result);
// });
// Both return docs.
Todo.findOneAndRemove({_id: '5a3fd007b49f445c46355bfb'}).then(todo => {
  console.log(todo);
})
Todo.findByIdAndRemove('5a3fd007b49f445c46355bfb').then(todo => {
  console.log(todo);
});