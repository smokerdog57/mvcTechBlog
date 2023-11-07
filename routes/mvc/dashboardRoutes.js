// /routes/dashboardRoutes.js
const express = require('express');
const router = express.Router();
const dashboardController = require('../controllers/mvc/dashboardController');

// Define a route to render the dashboard
router.get('/dashboard',dashboardController.renderDashboard);
// Route to retrieve the user's blog posts
router.get('/dashboard/posts', dashboardController.getBlogPosts);

module.exports = router;
