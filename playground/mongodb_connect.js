// const MongoClient = require('mongodb').MongoClient;
const { MongoClient, ObjectID } = require('mongodb');

const host_url = 'mongodb://localhost:27017/test';

MongoClient.connect(host_url, (err, db) => {
    if (err) {
        console.log('Unable to connect to mongodb server');
    } else {
        console.log('Connected to mongodb server');
    }

    // db.collection('Users').insert({
    //     name: 'hongshen',
    //     age: 26,
    //     location: 'New York'
    // }, (err, result) => {
    //     if (err) {
    //         console.log('Uable to connect to db', err);
    //     } else {
    //         console.log(JSON.stringify(result.ops[0]._id.getTimestamp(), undefined, 2));
    //     }
    // })

    db.close();
});