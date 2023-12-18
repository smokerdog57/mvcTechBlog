// /mvc/userRoutes
const express = require('express');
const router = express.Router();
const userController = require('../../controllers/mvc/userController');

// Render login page via route /mvc/user/login
router.get('/login', userController.renderLoginPage);

// Render signup page via route /mvc/user/signup
router.get('/signup', userController.renderSignupPage);

// Logout via route /mvc/user/logout
router.get('/logout', userController.logoutUser);

module.exports = router;
