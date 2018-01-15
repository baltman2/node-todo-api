// import { setTimeout } from "timers";
// const setTimeout = require('timers');

// var somePromise = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve('it worked');
//   }, 1000);
// });

// somePromise.then((message) => {
//   console.log('resolved', message);
// });

function doSth() {
  setTimeout(() => {
    console.log('doSth finished');
  }, 1000);
}
function doSthElse() {
  setTimeout(() => {
    console.log('doSthElse finished');
  }, 2000);
}
function doSthFinal() {
  setTimeout(() => {
    console.log('doSthFinal finished');
  }, 3000);
}
function failureCb(err) {
  console.log(err);
}

// clever functional javascript chaining.
// [doSth, doSthElse, doSthFinal].reduce((p, f) => p.then(f), Promise.resolve());
// Promise.resolve().then(doSth).then(doSthElse).then(doSthFinal);

// const say = str => { console.log(str) };
const wait = ms => new Promise(resolve => {
  setTimeout(resolve, ms);
});

wait().then(() => console.log(4));
Promise.resolve().then(() => console.log(2)).then(() => console.log(3));
console.log(1);

// let myPromise = new Promise(function(resolve, reject){
//   setTimeout(function() {
//     resolve('success');
//   }, 2000);
// });
// myPromise.then(function(mesg){
//   console.log(mesg);
// });

// Node doesn't support async/await.
// void async function foo() {
//   try {
//     let result = await doSth();
//     let newResult = await doSthElse();
//     let finalResult = await doSthFinal();
//     console.log(`Got the final result ${finalResult}`);
//   } catch(err) {
//     failureCb(err);
//   }
// }();

