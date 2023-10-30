const express = require('express');
const router = express.Router();
const userController = require('./api/userController');

// Define a route for both login and signup pages and serve the post of auth data
router.get('/auth', userController.renderAuthpage);
router.post('/auth', userController.handleAuth);
router.get('/logout', userController.logoutUser);

module.exports = router;