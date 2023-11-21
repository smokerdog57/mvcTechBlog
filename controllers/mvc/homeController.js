// /controllers/mvc/homecontroller
// Define the controller object
const { Blogpost, User } = require("../../models")

const homeController = {
  // Define a function to render the home page
  renderHomepage: async (req, res, loggedIn) => {
    try {
      // render the 'home' view
      const blogposts = await Blogpost.findAll({
        include: [User]
      });

      const posts = blogposts.map((post) => post.get({ plain: true }));
    
      // Render the 'home' view and pass user data and the loggedIn status to it
      res.render('home', { pageTitle: 'The Tech Blog', posts: blogposts, loggedIn });


    } catch (error) {
      // Handle any potential errors
      console.error('Error in renderHomepage:', error);
      // You can customize error handling based on your requirements
      res.status(500).send('homeController: Internal Server Error');
    }
  },
}
// Export the controller object
module.exports = homeController;