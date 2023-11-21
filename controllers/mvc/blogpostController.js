// /mvc/blogpostController
const { Blogpost, User } = require("../../models")
const blogpostController = {
  renderBlogpost: async (req, res) => {
    try {
      const postId = req.params.postId;
      const blogpost = await Blogpost.findByPk(postId, {
        include: [User],
      });

      if (!blogpost) {
        return res.status(404).send('Blog post not found');
      }

      res.render('blogpost', { blogpost });
    } catch (error) {
      console.error('Error in renderBlogpost:', error);
      res.status(500).send(`blogpostController.renderBlogpost: Internal Server Error\n${error.message}`);
    }
  },

  renderBlogpostWithNewComment: async (req, res) => {
    try {
      const postId = req.params.id;
      const blogpost = await Blogpost.findByPk(postId, {
        include: [User],
      });

      if (!blogpost) {
        return res.status(404).send('Blog post not found');
      }

      res.render('blogpost', { blogpost });
    } catch (error) {
      console.error('Error in renderBlogpost:', error);
      res.status(500).send(`blogpostController.renderBlogpost: Internal Server Error\n${error.message}`);
    }
  },
};

module.exports = blogpostController;