// /api/userRoutes
const express = require('express');
const router = express.Router();
const userController = require('../../controllers/api/userController');

// API route for posting user credentials for login
router.post('/auth', userController.handleAuth);

// API route for posting new user credentials for signup
router.post('/auth', (req, res) => {
    console.log('Received a POST request to /api/user/signup'); // Add this line for debugging
    userController.handleAuth(req, res);
});

module.exports = router;
