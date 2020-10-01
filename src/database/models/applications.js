'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Applications extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Applications.init({
    userId: DataTypes.STRING,
    jobId: DataTypes.STRING,
    path: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Applications',
  });
  return Applications;
};