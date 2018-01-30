/**
 * CMS API service.
 */

const express = require('express');
const bodyParser = require('body-parser');
const logger = require('morgan');
const cors = require('cors');

const errors = require('./lib/routes/errors');
const routes = require('./lib/routes')();

// Express app
const app = express();

// CORS
app.use(cors({ allowedHeaders: 'Authorization, Content-Type' }));

// logger
if (app.get('env') === 'development') {
  app.use(logger('dev'));
} else {
  app.use(logger());
}

// body parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// routes
app.use('/', routes);

// error handlers
app.use(errors.notfound);
app.use(errors.error);

module.exports = app;
