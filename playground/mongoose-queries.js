const { ObjectID } = require('mongodb');
const { mongoose } = require('./../server/db/mongoose');
const { Todo } = require('./../server/models/todos');

var id = '5a3a87a4bf8a4c1ef299f2601';

// Todo.insertMany([{
//   text: 'First test todos'
// }, {
//   text: 'Second test todos'
// }]);

if (!ObjectID.isValid(id)) {
  console.log('id not valid');
}

// Todo.find({
//   _id: id
// }).then((todos) => {
//   console.log('Todos', todos);
// });

// Todo.findOne({
//   _id: id
// }).then((todo) => {
//   console.log('Todo', todo);
// });

// Todo.findById(id).then(todo => {
//   if (!todo) {
//     return console.log('id not found');
//   }
//   console.log('FindById', todo);
// }).catch(err => console.log(err));