'use strict';
module.exports = (sequelize, DataTypes) => {
  const freshwaterfish = sequelize.define('freshwaterfish', {
    name: DataTypes.STRING
  }, {});
  freshwaterfish.associate = function(models) {
    // associations can be defined here
  };
  return freshwaterfish;
};