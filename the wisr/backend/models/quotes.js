'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Quotes extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Quotes.init({
    q_id: {type:DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement:true
},
    description: DataTypes.STRING,
    collection: DataTypes.STRING,
    a_id: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Quotes',
  });
  return Quotes;
};