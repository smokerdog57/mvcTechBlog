// /api/userController
const User = require('../../models/User');
const bcrypt = require('bcrypt');

const userController = {

  handleAuth: async (req, res) => {
    const { action, email_id, password, name } = req.body;

    if (action === 'login') {
      // Handle login logic
      try {
        const user = await User.findOne({ where: { email_id } });

        if (!user) {
          return res.status(401).json({ error: 'Invalid user credentials' });
        }

        const passwordMatch = await bcrypt.compare(password, user.password);

        if (!passwordMatch) {
          return res.status(401).json({ error: 'Invalid user credentials' });
        }

        req.session.userId = email_id;

        res.redirect('/home');
      } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Failed to log in' });
      }
    } else if (action === 'signup') {
      if (!email_id || !password) {
        // Redirect to the signup page if email or password is missing
        return res.redirect('/signup');
      }

      try {
        const hashedPassword = await bcrypt.hash(password, 10);

        const registration_date = new Date();

        const newUser = await User.create({
          email_id,
          name, // Use the 'name' field
          password: hashedPassword,
          registration_date,
        });

        req.session.userId = email_id;

        res.redirect('/home');
      } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Failed to register user' });
      }
    }
  },
}
module.exports = userController;