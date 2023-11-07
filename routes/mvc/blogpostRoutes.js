// /routes/blogpostRoutes
const express = require('express');
const router = express.Router();
const postController = require('../controllers/api/postController');

// Define a route to render single blogpost / comment page
router.get('/blogpostcomment',postController.renderBlogCommentPage);

module.exports = router;

