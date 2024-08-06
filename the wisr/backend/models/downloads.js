'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Downloads extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Downloads.init({
    q_id: DataTypes.INTEGER,
    u_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Downloads',
  });
  return Downloads;
};