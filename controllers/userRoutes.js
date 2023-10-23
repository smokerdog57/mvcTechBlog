const express = require('express');
const router = express.Router();
const userController = require('../controllers/api/userController');

// console.log('1. userRoutes has started');

// Define a route to render the homepage
router.get('/login', userController.renderLoginpage);
// console.log('2. userController called from userRoutes');

module.exports = router;