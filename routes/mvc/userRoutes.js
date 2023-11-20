// /mvc/userRoutes
const express = require('express');
const router = express.Router();
const userController = require('../../controllers/mvc/userController');

// Route to render login page
router.get('/login', userController.renderLoginPage);

// Route to render signup page
router.get('/signup', userController.renderSignupPage);

// Route for logout
router.get('/logout', userController.logoutUser);

module.exports = router;
