// collect all the individual Sequelize models representing database tables) and export them as a single object 
// so that they can be easily imported and used in other parts of the application.
const User = require('./User');
const Blogpost = require('./Blogpost');
const Comment = require('./Comment');

User.hasMany(Blogpost, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE'
});

Blogpost.belongsTo(User, {
  foreignKey: 'user_id'
});

User.hasMany(Comment, {
  foreignKey: 'user_id'
})

Comment.belongsTo(User, {
  foreignKey: 'user_id'
});

Comment.belongsTo(Blogpost, {
  foreignKey: 'post_id'
});

// export models
module.exports = {
  User,
  Blogpost,
  Comment,
};  