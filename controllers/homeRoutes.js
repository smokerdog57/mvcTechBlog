const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

// Define a route to render the homepage
router.get('/', userController.renderHomepage);

module.exports = router;