const { User } = require('../models'); // Import the User model from your models
const bcrypt = require('bcrypt'); // For password hashing

const userController = {
  // User registration logic
  register: async (req, res) => {
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
  login: async (req, res) => {
    try {
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

// Render home page logic
renderHomepage: (req, res) => {
  // You can pass data to the view if needed
  const data = {
    pageTitle: 'Welcome to the Tech Blog',
    // Add more data as needed for your homepage
  };

  // Render the 'index' (homepage) view using the specified data
  res.render('index', data); 
},
  
  // User logout logic
  logout: (req, res) => {
    // Clear user session or token

    // Redirect to the homepage or login page
  },
};

module.exports = userController;