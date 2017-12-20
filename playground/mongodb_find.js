// const MongoClient = require('mongodb').MongoClient;
const { MongoClient, ObjectID } = require('mongodb');

const host_url = 'mongodb://localhost:27017/test';

MongoClient.connect(host_url, (err, db) => {
    if (err) {
        console.log('Unable to connect to mongodb server');
    } else {
        console.log('Connected to mongodb server');
    }

    // find() return a cursor
    // db.collection('Todos').find({ 
    //     _id: new ObjectID('5a0717c9124a4aef69128592')
    // }).toArray().then((docs) => {
    //     console.log('Todos');
    //     console.log(JSON.stringify(docs, undefined, 2));
    // }, (err) => {
    //     console.log('unable to fetch data', err);
    // });
    // db.collection('Todos').find().count().then((count) => {
    //     console.log(`Todo count: ${count}`);
    // }, (err) => {
    //     console.log('unable to fetch data', err);
    // });
    db.collection('Todos').find().toArray().then(
        (docs) => {
            console.log(docs.filter((doc) => {
                return doc.text !== 'test2';
            }));
        },
        (err) => {
            console.log('Unable to fetch data', err);
        }
    )

    // db.close();
});