// const MongoClient = require('mongodb').MongoClient;
const { MongoClient, ObjectID } = require('mongodb');

const host_url = 'mongodb://localhost:27017/test';

MongoClient.connect(host_url, (err, db) => {
    if (err) {
        console.log('Unable to connect to mongodb server');
    } else {
        console.log('Connected to mongodb server');
    }

    // addMany
    db.collection('Todos').insertMany([
        { 
            name: 'hongshen',
            todo: 'programming',
            compelete: false
        },
        {
            name: 'lunan',
            todo: 'dont know',
            compelete: false
        },
        {
            name: 'hongshen',
            todo: 'movie',
            compelete: false
        }
    ]), (err, result) => {
        if (err) {
            console.log('Unable to fetch data', err);
        } else {
            console.log('Insertion succeed');
        }
    }

    // findOneAndDelete
    db.collection('Todos').findOneAndDelete({ compelete: false }).then((result) => {
        console.log(result);
    });

    // db.close();
});