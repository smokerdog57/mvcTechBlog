const express = require('express');
const router = express.Router();
const userController = require('../../controllers/api/userController');

// API route for posting user credentials for login
router.post('/api/user/login', userController.handleAuth);

// API route for posting new user crentials for signup
router.post('/api/user/signup', userController.handleAuth);

module.exports = router;
