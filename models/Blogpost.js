// defines blogposts table

const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection.js');

// Create an instance of the Model
class Blogpost extends Model {}

// Initialize column definitions
Blogpost.init(
    {
        post_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        title: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        content: {
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
        modelName: 'blogpost',
    }
);

// Export the initialized Sequelize model instance
module.exports = Blogpost;
