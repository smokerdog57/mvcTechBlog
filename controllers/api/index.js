// /api/index
// import controllers
const userController = require('./userController');
const blogpostController = require('./blogpostController');

// Export controllers
module.exports = {
  userController,
  blogpostController,
};