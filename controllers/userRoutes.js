const express = require('express');
const router = express.Router();
const userController = require('./api/userController');

// Route for login page
router.get('/login', userController.renderLoginPage);
router.post('/login', userController.handleAuth);

// Route for signup page
router.get('/signup', userController.renderSignupPage);
// Add this route for signup
router.post('/signup', userController.handleAuth);


// Route for logout
router.get('/logout', userController.logoutUser);

module.exports = router;
