// /server.js
// Import dependencies
const express = require('express');
const session = require('express-session');
const exphbs = require('express-handlebars');
const path = require('path');
const helpers = require('./utils/helpers');

// import mvc routers
const homeRoutes = require('./routes/mvc/homeRoutes');
const userRoutes = require('./routes/mvc/userRoutes');
const dashboardRoutes = require('./routes/mvc/dashboardRoutes');
const blogpostRoutes = require('./routes/mvc/blogpostRoutes');

// import api routers
const apiuserRoutes = require('./routes/api/userRoutes');
const apidashboardRoutes = require('./routes/api/dashboardRoutes');
const apiblogpostRoutes = require('./routes/api/blogpostRoutes');

// Import Sequelize dependencies
const sequelize = require('./config/connection');
const SequelizeStore = require('connect-session-sequelize')(session.Store);

// Set up express, port, and secret key
const app = express();
const secretKey = process.env.SECRET_KEY;
const PORT = process.env.PORT || 3001;

// Create a session instance
const sess = {
  secret: secretKey,
  cookie: {
    maxAge: 24 * 60 * 60 * 1000, // 1 day
    httpOnly: true,
    secure: false,
    sameSite: 'strict',
  },
  resave: false,
  saveUninitialized: true,
  store: new SequelizeStore({
    db: sequelize,
  }),
};

// Create a Handlebars instance and allow protoype default
const hbs = exphbs.create({
  helpers,
  runtimeOptions: {
    allowProtoPropertiesByDefault: true,
    allowProtoMethodsByDefault: true,
  },
});

// Set up Handlebars as the template engine
app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

// Middleware to serve the browser session
app.use(session(sess));

// Middleware to serve JSON, form and static data
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(path.join(__dirname,'public')));

// Middleware to log incoming requests
// app.use((req, res, next) => {
//   console.log(`Received a ${req.method} request to ${req.path}`);
//   next();
// });

// Middleware to serve the api routes
app.use('/api/user', apiuserRoutes);
app.use('/api/dashboard', apidashboardRoutes);
app.use('/api/blogpost', apiblogpostRoutes);

// Middleware to serve the mvc routes
app.use('/', homeRoutes);
app.use('/user',userRoutes);
app.use('/dashboard', dashboardRoutes);
app.use('/blogpost', blogpostRoutes);

// Start the server
app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}!`);
  sequelize.sync({ force: false });
});