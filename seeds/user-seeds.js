const User = require('../models/User');

const userData = [
  {
    email_id: "test@gmail.com",
    password: "$2b$10$rUiO4iL.HuhdvtVPG0EK0e7xrWCh3dXZDSI9kH3sgoNi8UyiIgtDu",
    registration_date: "2023-10-19",
  },
];

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;