// defines user table

const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection.js');

// create instance of Model
class User extends Model { }

// initialize column definitions
User.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    user_id: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    registration_date: {
      type: DataTypes.DATE,
      allowNull: false,
    },
  },
  // define Sequalize model configuration options
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'user',
  }
);
// export initialized Sequelize model instance
module.exports = User;