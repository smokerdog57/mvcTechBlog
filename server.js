// Import dependencies
const express = require('express');
const session = require('express-session');
const exphbs = require('express-handlebars');
const path = require('path');

// Import routers
const routes = require('./controllers/');

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

// Create a Handlebars instance
const hbs = exphbs.create({});

// Set up Handlebars as the template engine
app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

// Middleware to serve the browser session
app.use(session(sess));

// Middleware to serve JSON and form data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Middleware to serve static files from the "public" directory
app.use(express.static(path.join(__dirname,'public')));

// Middleware to serve the routes
app.use(routes);

// Start the server
app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}!`);
  sequelize.sync({ force: false });
});