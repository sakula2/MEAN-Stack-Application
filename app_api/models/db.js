const mongoose = require('mongoose');
const { MongoClient } = require('mongodb');
const { connect } = require('http2');

mongoose.Promise = global.Promise;
const username = process.env.username;
const password = process.env.password;
const cluster = process.env.cluster;
const dbname = process.env.MONGODB_URI;


const url = 'mongodb://localhost/restaurant';
//url = `mongodb+srv://${username}:${password}@${cluster}.mongodb.net/${dbname}?retryWrites=true&w=majority`;

    // Connect MongoDB at default port 27017.
let mong = mongoose.connect(url, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}, (err) => {
    if (!err) {
        console.log('MongoDB Connection Succeeded.')
        console.log(`Mongoose connected to ${url} `);
    } else {
        console.log('Error in DB connection: ' + err)
    }
});

//require('./locations');
require('./menu');
require('./orderdetails');