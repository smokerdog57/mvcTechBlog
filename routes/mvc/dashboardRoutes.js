// /routes/dashboardRoutes.js
const express = require('express');
const router = express.Router();
const dashboardController = require('../../controllers/mvc/dashboardController');

// Define a route to render the dashboard
router.get('/dashboard/:username',dashboardController.renderDashboard);

module.exports = router;
