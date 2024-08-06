'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Authors extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Authors.init({
    a_id: {type: DataTypes.INTEGER,
           primaryKey: true,
           autoIncrement: true,
           allowNull: false
    }, 
    a_name: DataTypes.STRING,
    story: DataTypes.STRING,
    a_pic: DataTypes.STRING,
    
  }, {
    sequelize,
    modelName: 'Authors',
    tableName: 'authors',
    timestamps: false,
  });
  return Authors;
};