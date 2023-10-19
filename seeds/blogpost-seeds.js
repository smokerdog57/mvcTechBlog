const Blogpost = require('../models/Blogpost');

const blogpostData = [
  {
    title: " This is a test blogpost",
    content: "test@gmail.com",
    user_id: "test@gmail.com",
    created_date: "2023-10-19",
  },
];

const seedBlogposts = () => Blogpost.bulkCreate(blogpostData);

module.exports = seedBlogposts;