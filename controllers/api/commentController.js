const { Comment } = require('../models');

const commentController = {
    renderCommentpage: async (req, res) => { // Add the loggedIn parameter here
        try {
          // render the comment page
          const blogcomments = await Comment.findAll({
            include: [User]
          });
    
          const comments = blogcomments.map((comment) => comment.get({ plain: true }));
          // console.log(posts)
    
          // Render the 'home' view and pass user data and the loggedIn status to it
          res.render('comment', { pageTitle: 'The Tech Blog', comments: blogcomments}); 
    
    
        } catch (error) {
          // Handle any potential errors
          console.error('Error in renderComment:', error);
          // You can customize error handling based on your requirements
          res.status(500).send('commentController: Internal Server Error');
        }
      },

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