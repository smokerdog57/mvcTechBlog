// Define the controller object
const Blogpost = require('../../models/Blogpost');

const homeController = {
  // Define a function to render the home page
  renderHomepage: async (req, res, loggedIn) => { // Add the loggedIn parameter here
    try {
      // render the 'home' view
      const blogpost = await Blogpost.findAll(); // Fetch all blog posts from the database

      // Render the 'home' view and pass user data and the loggedIn status to it
      res.render('home', { pageTitle: 'The Tech Blog', posts: blogpost, loggedIn }); // Pass loggedIn here

    } catch (error) {
      // Handle any potential errors
      console.error('Error in renderHomepage:', error);
      // You can customize error handling based on your requirements
      res.status(500).send('homeController: Internal Server Error');
    }
  },
};

// Export the controller object
module.exports = homeController;