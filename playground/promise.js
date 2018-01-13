// import { setTimeout } from "timers";
// const setTimeout = require('timers');

var somePromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('it worked');
  }, 1000);
});

somePromise.then((message) => {
  console.log('resolved', message);
});