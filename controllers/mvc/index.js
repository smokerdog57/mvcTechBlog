// /mvc/index
// import controllers
const userController = require('./userController');
const homeController = require('./homeController');
const dashboardController = require('./dashboardController');
const blogpostController = require('./blogpostController');

// Export controllers
module.exports = {
  userController,
  homeController,
  dashboardController,
  blogpostController,
};