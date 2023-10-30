const Blogpost = require('../models/Blogpost');

const blogpostData = [
  {
    title: "Why MVC is so important",
    content: "MVC allows developers to maintain a true separation of concerns ...",
    user_id: 1,
    created_date: "10/19/2023",
  },
];

const seedBlogposts = () => Blogpost.bulkCreate(blogpostData);

module.exports = seedBlogposts;