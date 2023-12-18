// /api/userRoutes
const express = require('express');
const router = express.Router();
const userController = require('../../controllers/api/userController');

// API route for posting user credentials for login via route: /api/user/auth
router.post('/auth', userController.handleAuth);

// API route for posting new user credentials for signup via route: /api/user/auth
router.post('/auth', (req, res) => {
    userController.handleAuth(req, res);
});

module.exports = router;
