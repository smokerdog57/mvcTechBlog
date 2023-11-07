// /api/blogpostRoutes.js
const express = require('express');
const router = express.Router();
const blogpostController = require('../../controllers/api/blogpostController');

// Add a comment to a blog post
router.post('/api/blogpost/comment', blogpostController.postComment);

module.exports = router;
