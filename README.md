# 14 Model-View-Controller (MVC): Tech Blog

### Link to GitHub repository:  https://github.com/smokerdog57/mvcTechBlog
### Heroku Deploy Link:			https://mvctechblogtpf-007db6850084.herokuapp.com/

## Badges
    
![github](https://img.shields.io/badge/github-Profile-lightgrey.svg)
![JavaScript](https://img.shields.io/badge/JavaScript-yellow.svg)
![node.js](https://img.shields.io/badge/node.js-12.0-green.svg)
![npm](https://img.shields.io/badge/npm-6.14.4-blue.svg)
![Express](https://img.shields.io/badge/Express-red.svg)
![chrome castify](https://img.shields.io/badge/chrome%20castify-orange.svg)
![Sequelize](https://img.shields.io/badge/Sequelize-blue.svg)
![MySQL2](https://img.shields.io/badge/MySQL2-blue.svg)
![dotenv](https://img.shields.io/badge/dotenv-blue.svg)

## Table of Contents
- [Description](#description)
- [Installation](#installation)
- [Usage](#usage)
- [Requirements](#requirements)
- [Mock-up](#mock-up)
- [License](#license)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)

## Description

This application serves as a CMS-style blog site similar to a Wordpress site, where developers can publish their blog posts and comment on other developers’ posts as well. It utilizes key technologies such as ORM, MySQL2, Sequelize, Node.js, Express, etc. App will follow the MVC paradigm in its architectural structure, using Handlebars.js as the templating language, Sequelize as the ORM, and the express-session npm package for authentication and be deployed to Heroku. Blog will enable a developer to write about tech in a CMS-style blog site that supports publishing articles, blog posts, thoughts and opinions.   The database is dropped and recreated by executing the following commands:
	mysql -u root -pw;
	source ./db/schema.sql;

Following the creation of the database, the database models (tables) are defined and the initial data is seeded.  This is accomplished by executing the bash command: node ./seeds/index.js This command utilizes Sequelize to generate table models and establish associations based on the definitions in ./models/index.js. 

The next step is to start the backend server.  To start Server, execute the following bash command to run the ./server.js script: npm start. This script establishes a connection to the 'ecommerce_db' database by calling ./config/connection.js and sets up API routes by in the controllers directory. The server application is now running and ready to for testing.

## Installation
  
1. create a new github repository named 'mvcTechBlog'
2. launch microsoft visual studio
3. enter cli:  cd ~/bootcamp/homework
4. enter cli:  git clone <repository> // creates mvcTechBlog
5. enter cli:  cd mvcTechBlog
6. enter cli:  npm init // this initializes the package.json project file
7. Edit the `package.json` file to add the following dependencies:
   - "bcrypt": "^5.1.1",
   - "connect-session-sequelize": "^7.1.7",
   - "dotenv": "^16.3.1",
   - "express": "^4.18.2",
   - "express-handlebars": "^7.1.2",
   - "express-session": "^1.17.3",
   - "mysql2": "^3.6.1",
   - "sequelize": "^6.33.0",
   - "uuid": "^9.0.1"
8. enter cli: npm install //install the dependencies
9. Verify Heroku connection, userid and password. 
10. After running above steps create, copy and/or confirm the following directory structure and files:
	assets			// copy from challenge
	config
	controllers
	db
	models
	public
	seeds
	views
	.env
	.gitignore
	node_modules		// confirm: created by npm	
	package.json		// confirm: created by npm		
	package-lock.json	// confirm: created by npm	
	README.md		// copy from challenge

## Usage

1. open MS Visual Studio and terminal
2. enter cli:  cd homework/mvcTechBlog
3. enter cli:  mysql -u root -p <when prompted enter password>
4. enter cli:  source ./db/schema.sql    // create the database
5. open a second MS Visual Studio terminal session
6. enter cli:  cd homework/mvcTechBlog
7. enter cli:  npm run seed
8. enter cli:  npm start
9. Use the created requests to test the app by sending requests to API server (e.g., http://localhost:4000) and receive responses.

## Requirements
```md
GIVEN a CMS-style blog site
WHEN I visit the site for the first time
THEN I am presented with the homepage, which includes existing blog posts if any have been posted; navigation links for the homepage and the dashboard; and the option to log in
WHEN I click on the homepage option
THEN I am taken to the homepage
WHEN I click on any other links in the navigation
THEN I am prompted to either sign up or sign in
WHEN I choose to sign up
THEN I am prompted to create a username and password
WHEN I click on the sign-up button
THEN my user credentials are saved and I am logged into the site
WHEN I revisit the site at a later time and choose to sign in
THEN I am prompted to enter my username and password
WHEN I am signed in to the site
THEN I see navigation links for the homepage, the dashboard, and the option to log out
WHEN I click on the homepage option in the navigation
THEN I am taken to the homepage and presented with existing blog posts that include the post title and the date created
WHEN I click on an existing blog post
THEN I am presented with the post title, contents, post creator’s username, and date created for that post and have the option to leave a comment
WHEN I enter a comment and click on the submit button while signed in
THEN the comment is saved and the post is updated to display the comment, the comment creator’s username, and the date created
WHEN I click on the dashboard option in the navigation
THEN I am taken to the dashboard and presented with any blog posts I have already created and the option to add a new blog post
WHEN I click on the button to add a new blog post
THEN I am prompted to enter both a title and contents for my blog post
WHEN I click on the button to create a new blog post
THEN the title and contents of my post are saved and I am taken back to an updated dashboard with my new blog post
WHEN I click on one of my existing posts in the dashboard
THEN I am able to delete or update my post and taken back to an updated dashboard
WHEN I click on the logout option in the navigation
THEN I am signed out of the site
WHEN I am idle on the site for more than a set time
THEN I am able to view posts and comments but I am prompted to log in again before I can add, update, or delete posts
```
## Mock-Up

The following video is a mockup of the application in use: ![mockup](/public/images/14-mvc-homework-demo-01.gif)

## License

github, jses6, express.js
https://opensource.org/licenses/MIT

npm
https://opensource.org/licenses/Artistic-2.0


- - -
© 2023 edX Boot Camps LLC. Confidential and Proprietary. All Rights Reserved.

## Contributing

1. Sandy Smith (tutor):  Sandy helped me understand the acceptance criteria.

## Tests

```md
Test001: PASSED. execute schema.sql, then verify mvctechblog_db is created.
Test002: PASSED. execute npm run seed, then verify the xx db is seeded.
Test003: PASSED. execute npm start, then verify the server is listening on port 3001.
Test004: PASSED. from browser launch localhost:3001/ and verify home page displays displays links: <home>,<dashboard>, <login> & existing blogs.
Test005: PASSED. From home page, when i click <home> the home page is rendered.
Test006: PASSED. From home page, when i click <login>, the login page is rendered with input form for uid/pw and link to Signup.
Test007: PASSED. From login page, when I enter uid/pw and click <login>, the uid/pw is authenticated and user is directed to home page. User is now logged in nav bar  links: <home>,<dashboard>, <logout> & existing blogs.
Test008: PASSED. exit browser, then From login page, click <Sign up instead>, the sign up page is rendered.
Test009: PASSED. from signup page, user enters name,new uid and new pw. when users clicks <xxxx>, these credentials are written to user table and home page is rendered with nav links:  <home>,<dashboard>, <logout> & existing blogs.
Test010: PASSED. After logging in, at home page, click <logout> and user is logged out, home page is displayed with the <home>,<dashboard>, <login> & existing blogs.
Test011: PASSED. from home page, i log in. then i click on the blogpost title and the blogpost comment page is displayed. I am presented with the post title, contents, post creator’s username, and date created for that post and have the option to leave a comment
Test012: PASSED. (continuing from Test011) User fills in comment input field and clicks <submit>. there is a POST to route /api/blogpost/comment. the user's (comment creator) username, text, date_created (today's date) is written to the Comment model. The page is updated  to include the comment, the comment creaters username and the date created.
Test012 Not run.  ADD A NEW BLOG POST FROM DASHBOARD.  logged in user clicks <DASHBOARD> and a new page is rendered with <h1> Your Dashboard and endered with nav links:  <home>,<dashboard>, <logout> & existing blogs that the user has previously created.  At the bottom of the page is is a button entitled "+New Post".  

```
## Questions
  
### Github username
smokerdog57

### Github url
https://github.com/smokerdog57/mvcTechBlog
  
### Contact me
email: smokerdog57@gmail.com
phone: 941-221-1132