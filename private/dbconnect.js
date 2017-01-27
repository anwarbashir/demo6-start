//exports.db1 = 'mongodb://localhost:27017/db1';
exports.db1 = 'mongodb://anwar:branklyn#03@ds027628.mlab.com:27628/topacademy';

var mongoose = require('mongoose');
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://anwar:branklyn#03@ds027628.mlab.com:27628/topacademy')
  .then(() =>  console.log('mongoose connection established...'))
  .catch((err) => console.error(err));