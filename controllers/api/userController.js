const { User } = require('../../models/User'); // Import the User model from your models
const bcrypt = require('bcrypt'); // For password hashing

const userController = {
  // Define a function to render the login page
  
  renderLoginpage: (req, res) => {
    // console.log('userController: usercontroller entered');
    try {
      // You can add any necessary logic here
      // For now, render the 'splash' view
      res.render('login');
    } catch (error) {
      // Handle any potential errors
      console.error('Error in renderLoginpage:', error);
      // You can customize error handling based on your requirements
      res.status(500).send('userController: Internal Server Error');
    }
  },
   
  signupUser: async (req, res) => {
    try {
      const { user_id, password } = req.body;

      // Hash the user's password for security
      const hashedPassword = await bcrypt.hash(password, 10);

      // Create a new user in the database
      const newUser = await User.create({
        user_id,
        password: hashedPassword,
      });

      // Set up user session or token for automatic login

      // Respond with a success message or redirect to the login page
      res.status(201).json({ message: 'User registered successfully' });
    } catch (err) {
      console.error(err);
      res.status(500).json({ error: 'Failed to register user' });
    }
  },

  // User login logic
  loginUser: async (req, res) => {
    try {
      console.log('userController: loginUser entered');
      const { user_id, password } = req.body;

      // Find the user in the database by their user_id
      const user = await User.findOne({ where: { user_id } });

      if (!user) {
        return res.status(401).json({ error: 'Invalid user credentials' });
      }

      // Compare the provided password with the hashed password in the database
      const passwordMatch = await bcrypt.compare(password, user.password);

      if (!passwordMatch) {
        return res.status(401).json({ error: 'Invalid user credentials' });
      }

      // Set up user session or token for authentication

      // Respond with a success message or redirect to the user dashboard
      res.status(200).json({ message: 'User logged in successfully' });
    } catch (err) {
      console.error(err);
      res.status(500).json({ error: 'Failed to log in' });
    }
  },


  // User logout logic
  logoutUser: (req, res) => {
    // Clear user session or token

    // Redirect to the homepage or login page
  },
};

module.exports = userController;