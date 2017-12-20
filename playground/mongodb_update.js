// const MongoClient = require('mongodb').MongoClient;
const { MongoClient, ObjectID } = require('mongodb');

const host_url = 'mongodb://localhost:27017/test';

MongoClient.connect(host_url, (err, db) => {
    if (err) {
        console.log('Unable to connect to mongodb server');
    } else {
        console.log('Connected to mongodb server');
    }

    db.collection('Users').insertOne(
        {
            name: 'lunan',
            'usr_id': '????'
        }, (err, result) => {
            if (err) {
                return console.log('Uable to insert.', err);
            } else {
                console.log('insertion succeed');
            }
        }
    )

    db.collection('Users').findOneAndUpdate(
        { 
            name: 'lunan'
        }, 
        {
            // the following is the mongodb update operator, $
            $set: {
                name: 'hongshen'
            }
        }, {
            returnOriginal: false
        }).then((result) => {
            console.log(result);
        });

    db.close();
});