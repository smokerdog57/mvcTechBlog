const express = require('express');
const router = express.Router();
const splashController = require('../controllers/api/splashController');

console.log('1. splashRoutes has started')

// Define a route to render the homepage
router.get('/', splashController.renderSplashpage);
console.log('2. splashController called from splashRoutes')


module.exports = router;