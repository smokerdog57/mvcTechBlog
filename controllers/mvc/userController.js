// /mvc/userController

const userController = {
  renderLoginPage: (req, res) => {
    // Render the login page
    try {
      res.render('login'); // Render the 'login' view for login
    } catch (error) {
      console.error('Error in renderLoginPage:', error);
      res.status(500).send('userController.renderLoginPage: Internal Server Error');
    }
  },

  renderSignupPage: (req, res) => {
    // Render the signup page
    try {
      res.render('signup'); // Render the 'signup' view for sign-up
    } catch (error) {
      console.error('Error in renderSignupPage:', error);
      res.status(500).send('userController.renderSignupPage: Internal Server Error');
    }
  },

  logoutUser: (req, res) => {
    // Clear the user session to log them out
    req.session.destroy((err) => {
      if (err) {
        console.error('Error during logout:', err);
        res.status(500).json({ error: 'Failed to log out' });
      } else {
        res.redirect('/home'); // Redirect to the homepage after logging out
      }
    });
  },
};

module.exports = userController;