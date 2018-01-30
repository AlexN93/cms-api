/**
 * HTTP API endpoints.
 */

const express = require('express');
const router = express.Router();

module.exports = () => {

  const coursesApi = require('./courses')();
  const guidesApi = require('./guides')();

  // mounting APIs
  router.use('/courses', coursesApi);
  router.use('/guides', guidesApi);

  return router;
};
