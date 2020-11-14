/* eslint-disable no-console */
const mongoose = require('mongoose');

mongoose.connect('mongodb://username:password@67.202.40.97:27017/chewy',
  { useNewUrlParser: true, useUnifiedTopology: true })
  .then(console.log('Database connected'))
  .catch((err) => console.log(err));
const db = mongoose.connection;

module.exports = db;
