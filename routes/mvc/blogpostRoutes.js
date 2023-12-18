// /mvc/blogpostRoutes
const express = require('express');
const router = express.Router();
const blogpostController = require('../../controllers/mvc/blogpostController');

// Route to display a single blog post and and a comment form via route:  /mvc/blogpost/commentform/:post_id
router.get('/commentform/:post_id', blogpostController.renderBlogpost);

module.exports = router;