// /api/dashboardRoutes
const express = require('express');
const router = express.Router();
const blogpostController = require('../../controllers/api/blogpostController');

// API route to create a new blog post
router.post('/api/dashboard/posts', blogpostController.postBlog);

// API route to update an existing blog post
router.put('/api/dashboard/posts/:id', blogpostController.updateBlog);

// API route to delete an existing blog post
router.delete('/api/dashboard/posts/:id', blogpostController.deleteBlog);

module.exports = router;
