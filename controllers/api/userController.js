// /controllers/api/userController.js
const User = require('../../models/User');
const bcrypt = require('bcrypt');

const userController = {

  handleAuth: async (req, res) => {
    const { action, username, password } = req.body;

    if (action === 'login') {
      // Handle login logic
      try {
        const user = await User.findOne({ where: { username } });

        if (!user) {
          return res.status(401).json({ error: 'Invalid user credentials' });
        }

        const passwordMatch = await bcrypt.compare(password, user.password);

        if (!passwordMatch) {
          console.log('Invalid password');
          return res.status(401).json({ error: 'Invalid user credentials' });
        }

        // set the session.userId property
        req.session.userId = username;
        console.log(`userController: req.session.userid = ${req.session.userid}`);

        res.redirect('/home');
      } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Failed to log in' });
      }
    } else if (action === 'signup') {
      if (!username || !password) {
        // Redirect to the signup page if email or password is missing
        console.log('username or password missing');
        return res.redirect('/signup');
      }

      try {
        const hashedPassword = await bcrypt.hash(password, 10);
        const registration_date = new Date();

        const newUser = await User.create({
          username,
          password: hashedPassword,
          registration_date,
        });

        // set the session.userId property
        req.session.userId = username;
        console.log(`userController: req.session.userid = ${req.session.userid}`);

        res.redirect('/home');
      } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Failed to register user' });
      }
    }
  },
};

module.exports = userController;
