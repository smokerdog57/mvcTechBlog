const User = require('../../models/User'); // Import the User model from your models
const bcrypt = require('bcrypt'); // For password hashing

const userController = {

  // Function to render the auth (login/signup page)
  renderAuthpage: (req, res) => {
    try {
      res.render('auth'); // Render the 'auth' view
    } catch (error) {
      console.error('Error in renderAuthpage:', error);
      res.status(500).send('userController.renderAuthpage: Internal Server Error');
    }
  },

  // Function to handle both login and signup actions
  handleAuth: async (req, res) => {
    const { action, email_id, password } = req.body;

    if (action === 'login') {
      // User clicked the "Log In" button
      try {
        const user = await User.findOne({ where: { email_id } });

        if (!user) {
          return res.status(401).json({ error: 'Invalid user credentials' });
        }

        const passwordMatch = await bcrypt.compare(password, user.password);

        if (!passwordMatch) {
          return res.status(401).json({ error: 'Invalid user credentials' });
        }

        // Set the session to indicate the user is logged in
        req.session.userId = email_id;

        // Respond with a success message or redirect to the user dashboard
        res.redirect('/home');
      } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Failed to log in' });
      }
    } else if (action === 'signup') {
      // User clicked the "Sign Up" button
      try {
        const hashedPassword = await bcrypt.hash(password, 10);

        // Set the registration_date to the current date and time
        const registration_date = new Date();

        const newUser = await User.create({          
          email_id,
          password: hashedPassword,
          registration_date: registration_date
        });

        // Set the session to indicate the user is logged in
        req.session.userId = email_id;

        // redirect to the home page
        res.redirect('/home');
      } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Failed to register user' });
      }
    }
  },

  // Function to handle user logout
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