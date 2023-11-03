const express = require('express');
const router = express.Router();
const userController = require('./api/commentController');

// Route for login page
router.get('/comment', commentController.renderCommentPage);
router.post('/comment', commentController.postComment);

module.exports = router;
