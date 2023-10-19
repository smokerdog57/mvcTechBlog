// server.js

// import dependencies
const express = require('express');
const session = require('express-session');
const exphbs = require('express-handlebars'); // Handlebars view engine
const path = require('path');
const sequelize = require('./config/connection'); // Import the Sequelize connection
const secretKey = process.env.SECRET_KEY;

// import models
const User = require('./models/user');
const Blogpost = require('./models/Blogpost');
const Comment = require('./models/Comment');

const app = express();
const PORT = process.env.PORT || 4000;

// Configure Handlebars as the view engine
app.engine('handlebars', exphbs({ defaultLayout: 'main' })); // Specify the default layout
app.set('view engine', 'handlebars');
app.set('views', path.join(__dirname, 'views')); // Set the directory for your views

// Serve express and json data functions
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// serve the session
app.use(session({
  secret: 'your_secret_key_here',
  resave: false,
  saveUninitialized: true,
}));

// Serve static files from the "public" directory
app.use(express.static('public'));
app.use(express.static(path.join(__dirname, '/')));

// Start the server outside of the app.post block
sequelize.sync().then(() => {
  app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
  });
});