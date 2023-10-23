const express = require('express');
const router = express.Router();
const dashboardController = require('./api/dashboardController'); // Adjust the path as needed

// Define a route to render the splash page
router.get('/dashboard',dashboardController.renderDashboard);

module.exports = router;