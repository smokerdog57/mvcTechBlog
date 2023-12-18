// /api/blogpostRoutes.js
const express = require('express');
const router = express.Router();
const blogpostController = require('../../controllers/api/blogpostController');

// Call postComment method to write new comment to database via route:  /api/blogpost/commentsave/:post_id
router.post('/commentsave/:post_id', blogpostController.postComment);

module.exports = router;