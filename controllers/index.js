const express = require('express');
const splashController = require('../controllers/api/splashController');
const userController = require('../controllers/api/userController');

const router = express.Router();
// console.log('controller/index: 1. entered index.js');

router.get('/', splashController.renderSplashpage);

// console.log('controller/index: 2. Handling GET request for /login');
router.get('/login', userController.renderLoginpage);

router.post('/login', userController.loginUser);

// router.post('/dashboard', dashboardController.signupUser);
// router.post('/signup', userController.signupUser);

// router.post('/logout', userController.logoutUser);

module.exports = router;
