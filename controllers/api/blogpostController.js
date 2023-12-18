// /api/blogpostController
const { Blogpost, Comment, User } = require('../../models');

const blogpostController = {

    // Create a new comment
    postComment: async (req, res) => {
        try {
            const { text } = req.body;
            // set username
            // let username = req.session.userId;
            username = 'Lernantino'          
            const post_id = req.params.post_id; // Access post_id from the URL parameter
          
            // Create a new comment in the database
            const newComment = await Comment.create({
                text,
                username,
                created_date: new Date(), 
                post_id,
            });

            // Respond with a success message and the new comment
            res.status(201).json({ message: 'Comment posted successfully', newComment });
        } catch (err) {
            console.error(err);
            res.status(500).json({ error: 'Failed to post comment' });
        }
    },

    fetchBlogpostAndComment: async (req, res) => {
        try {
            const postId = req.params.postId;

            // Fetch the blog post and include the associated user
            const blogpost = await Blogpost.findByPk(postId, {
                include: [User],
            });

            if (!blogpost) {
                return res.status(404).send('Blog post not found');
            }

            // Fetch the associated comment using the blog post id
            const comment = await Comment.findOne({
                where: { blogpost_id: postId },
            });

            if (!comment) {
                return res.status(404).send('Comment not found');
            }

            // Now you have both the blog post and associated comment
            // You can send them to the frontend or proceed with further processing

            res.status(200).json({ blogpost, comment });
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: 'Internal Server Error' });
        }
    },
    //******************************************************** */
    // Create a new blog post
    postBlog: async (req, res) => {
        try {
            const { user_id, title, content, created_date } = req.body;

            // Create a new blog post in the database
            const newBlogpost = await Blogpost.create({
                user_id,
                title,
                content,
                created_date,
            });

            // Set up blogpost session or token for automatic login

            // Respond with a success message or redirect to the blog post page
            res.status(201).json({ message: 'Blog posted successfully' });
        } catch (err) {
            console.error(err);
            res.status(500).json({ error: 'Failed to post blog' });
        }
    },

    // Update an existing blog post
    updateBlog: async (req, res) => {
        try {
            // Add the logic to update an existing blog post
        } catch (err) {
            console.error(err);
            res.status(500).json({ error: 'Failed to update blog post' });
        }
    },

    // Delete a blog post
    deleteBlog: async (req, res) => {
        try {
            // Add the logic to delete a blog post
        } catch (err) {
            console.error(err);
            res.status(500).json({ error: 'Failed to delete blog post' });
        }
    }
}

module.exports = blogpostController;
