const Blogpost = require('../models/Blogpost');

const blogpostData = [
  {
    title: "Test blogpost",
    content: "This is a test blogpost",
    user_id: 1,
    created_date: "2023-10-19",
  },
];

const seedBlogposts = () => Blogpost.bulkCreate(blogpostData);

module.exports = seedBlogposts;