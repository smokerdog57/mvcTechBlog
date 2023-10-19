const express = require('express');
const userController = require('../controllers/userController');

const router = express.Router();

router.post('/register', userController.registerUser);
router.post('/login', userController.loginUser);
router.post('/logout', userController.logoutUser);
// Define other user-related routes and connect them to controller methods

module.exports = router;