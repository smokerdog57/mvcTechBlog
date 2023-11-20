// /mvc/homeRoutes
const express = require('express');
const router = express.Router();
const homeController = require('../../controllers/mvc/homeController');

// Define a route for both login and signup pages with loggedIn session property
router.get('/', (req, res) => {
    const loggedIn = req.session.userId !== undefined;
    homeController.renderHomepage(req, res, loggedIn);  
});

router.get('/home', (req, res) => {
    const loggedIn = req.session.userId !== undefined;   
    homeController.renderHomepage(req, res, loggedIn);  
});

module.exports = router;