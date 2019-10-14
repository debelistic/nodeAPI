'use strict';
module.exports = (sequelize, DataTypes) => {
  const list = sequelize.define('list', {
    item: DataTypes.STRING,
    priority: DataTypes.ENUM('very important', 'important', 'maybe'),
    quantity: DataTypes.INTEGER,
    UserId: DataTypes.INTEGER
  }, {});
  list.associate = function(models) {
    // associations can be defined here
    list.belongsTo(models.User, {
      foreignKey: 'UserId',
      as: 'user'
    })
  };
  return list;
};