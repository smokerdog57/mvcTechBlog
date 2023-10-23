// Comments Table
// comment_id: An auto-incremented primary key to uniquely identify each comment.
// text: The content of the comment (required).
// user_id: A foreign key that references the user_id from the Users table, indicating the user who made the comment.
// post_id: A foreign key that references the post_id from the Blog Posts table, specifying the post the comment belongs to.
// created_at: A timestamp that records when the comment was created.


const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection.js');

// Create an instance of the Model
class Comment extends Model { }

// Initialize column definitions
Comment.init(
    {
        comment_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        text: {
            type: DataTypes.TEXT,
            allowNull: false,
        },

        user_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: 'user',
                key: 'id',
            },
        },
        post_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: 'blogpost',
                key: 'post_id',
            },
        },
        created_date: {
            type: DataTypes.DATE,
            allowNull: false,
        },
    },
    // Define Sequelize model configuration options
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'comment',
    }
);

// Export the initialized Sequelize model instance
module.exports = Comment;
