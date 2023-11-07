// /mvc/index
// import routers
const userRoutes = require('./userRoutes');
const homeRoutes = require('./homeRoutes')
const dashboardRoutes = require('./dashboardRoutes');
const blogpostRoutes = require('./blogpostRoutes');

// Export controllers
module.exports = {
  userRoutes,
  homeRoutes,
  dashboardRoutes,
  blogpostRoutes,
};