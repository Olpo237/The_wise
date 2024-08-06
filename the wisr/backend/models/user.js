'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  User.init({
    u_id: {type:DataTypes.INTEGER,
           primaryKey: true,
           autoIncrement:true
    },
    u_name: DataTypes.STRING,
    u_email: DataTypes.STRING,
    u_pic: DataTypes.STRING,
    u_password: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'User',
    tableName: 'user',
    timestamps: false,
  });
  return User;
};