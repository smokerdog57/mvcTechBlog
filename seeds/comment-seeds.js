const Comment = require('../models/Comment');

const commentData = [
  {
    text: " This is a test comment",
    user_id: 1,
    post_id: 1,
    created_date: "2023-10-19",
  },
];

const seedComments = () => Comment.bulkCreate(commentData);

module.exports = seedComments;