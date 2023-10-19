const { Comment } = require('../models');

const commentController = {
    // Create a new comment
    postComment: async (req, res) => {
        try {
            const { user_id, text, created_date } = req.body;

            // Create a new comment in the database
            const newComment = await Comment.create({
                user_id,
                text,
                created_date,
            });

            // Set up comment session or token for automatic login

            // Respond with a success message or redirect to the blog post page
            res.status(201).json({ message: 'Comment posted successfully' });
        } catch (err) {
            console.error(err);
            res.status(500).json({ error: 'Failed to post comment' });
        }
    },
};

module.exports = commentController;