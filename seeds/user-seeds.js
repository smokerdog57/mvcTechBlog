const User = require('../models/User');

const userData = [
  {
    user_id: "test@gmail.com",
    password: "test",
    registration_date: "2023-10-19",
  },
];

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;