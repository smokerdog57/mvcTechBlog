// /models/Comment.js

// Dependencies
const { Sequelize, Model, DataTypes } = require('sequelize');
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

        username: {
            type: DataTypes.STRING,
            allowNull: false,
        },

        created_date: {
            type: DataTypes.DATE,
            allowNull: false,
        },

        // Add foreign key without association
        post_id: {
            type: DataTypes.INTEGER,
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
