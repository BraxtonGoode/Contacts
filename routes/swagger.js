const router = require('express').Router();
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('../swagger_output.json');

// Serve swagger docs on '/' because it's mounted on '/api-docs' in index.js
router.use('/', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

module.exports = router;
