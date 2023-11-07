// /api/index
// import routers
const userRoutes = require('./userRoutes');
const dashboardRoutes = require('./dashboardRoutes');
const blogpostRoutes = require('./blogpostRoutes');

// Export controllers
module.exports = {
  userRoutes,
  dashboardRoutes,
  blogpostRoutes,
};