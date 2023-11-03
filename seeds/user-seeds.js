const User = require('../models/User');

const userData = [
  {
    name: "Lernantino",
    email_id: "lernantino@gmail.com",
    password: "$2b$10$2sXbsultkU04NCC67RpwP.ymNP.Zy.b432rw/EKFo8SQ/MbevfaPi",
    registration_date: "2023-10-19",
  },
];

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;