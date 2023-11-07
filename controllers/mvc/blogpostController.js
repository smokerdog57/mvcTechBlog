// /mvc/postController
const { Blogpost } = require('../models');

const blogpostController = {
    // render single blog and comment page
    renderBlogCommentPage: async (req, res) => {
        try {   
            
            // not sure this is correct
          const blogcomments = await Comment.findAll({
            include: [User]
          });
    
          const comments = blogcomments.map((comment) => comment.get({ plain: true }));
          // console.log(posts)
    
          // Render the 'home' view and pass user data and the loggedIn status to it
          res.render('comment', { pageTitle: 'The Tech Blog', comments: blogcomments });
    
    
        } catch (error) {
          // Handle any potential errors
          console.error('Error in renderComment:', error);
          // You can customize error handling based on your requirements
          res.status(500).send('commentController: Internal Server Error');
        }
      },
    }   

module.exports = blogpostController;
