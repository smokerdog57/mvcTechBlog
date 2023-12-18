//automates the process of initializing and seeding a database with initial data.

// import dependencies
const seedUsers = require('./user-seeds');
const seedBlogposts = require('./blogpost-seeds');
const seedComments = require('./comment-seeds');
const sequelize = require('../config/connection');  // import sequelize from '../config/connection.js';

const seedAll = async () => {
  try {
    await sequelize.sync({ force: true });
    console.log('\n----- DATABASE SYNCED -----\n');

    await seedUsers ();
    console.log('\n----- USERS -----\n');

    await seedBlogposts ();
    console.log('\n----- BLOGPOSTS -----\n');

    // await seedComments ();
    // console.log('\n----- COMMENTS -----\n');

    process.exit(0);
  } catch (error) {
    console.error('Error seeding the database:', error);
    process.exit(1);
  }
};

seedAll();
// Collapse










