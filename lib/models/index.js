/**
 * Barrel file for db models.
 */

// env
if (!process.env.MONGODB_CONNECTION) {
  console.log('MONGODB_CONNECTION environment variable required.');
  process.exit(1);
}

const mongoose = require('mongoose');

mongoose.Promise = require('bluebird');
mongoose.connect(process.env.MONGODB_CONNECTION, { useMongoClient: true });

// .createConnection('mongodb://localhost/app', { useMongoClient: true });

exports.Course = require('./course');
exports.Guide = require('./guide');
