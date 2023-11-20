// /mvc/blogpostRoutes
const express = require('express');
const router = express.Router();
const blogpostController = require('../../controllers/mvc/blogpostController');

// Route to display a single blog post and and a comment form
router.get('/:postId/commentform', blogpostController.renderBlogpost);

// Route to display a single blog post and and a new comment
router.get('/comment/:id', blogpostController.renderBlogpostWithNewComment);

module.exports = router;