//updated 0547 10/17 tpf

// import dependencies
const express = require('express');
const session = require('express-session');
const path = require('path');
const sequelize = require('./config/connection'); // Import the Sequelize connection
const User = require('./models/user') // Import your models
//const authController = require('./controllers/authController'); // Import your auth controller
const fs = require('fs');
//const getTimeAndDate = require("./public/js/timeandDate.js");
//unique ID generator
const { v4: uuidv4 } = require('uuid');
// call using uuidv4();

const app = express();
const PORT = process.env.PORT || 4000;

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

// Define the controllers
//app.use('/auth', authController);

// Define the yourspace route to serve the login form
app.get('/yourspace', (req, res) => {
  res.sendFile(path.join(__dirname, 'views', 'index.html'));
});

// Define the login route to serve the login form
app.get('/login', (req, res) => {
  res.sendFile(path.join(__dirname, 'views', 'index.html'));
});

// :4000/blog will take us to /public/blog.html
app.get("/blog", (req, res) =>
  res.sendFile(path.join(__dirname, "/views/blog.html"))
);

// // localhost:4000/api/blog will display saved blog posts JSON
app.get("/api/blog", (req, res) => {
  fs.readFile("./db/blog.json", "utf-8", (err, data) => {
    if (err) throw err;
    const blogData = JSON.parse(data);
    res.json(blogData);
  });
});

// Start the server outside of the app.post block
// sequelize.sync().then(() => {
//   app.listen(PORT, () => {
//     console.log(`Server is listening on port ${PORT}`);
//   });
// });