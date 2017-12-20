var mongoose = require('mongoose');

const host_url = 'mongodb://localhost:27017/';

mongoose.Promise = global.Promise;
mongoose.connect(host_url);

module.exports = { mongoose };
