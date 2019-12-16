

import bcrypt from 'bcryptjs';

module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    username: DataTypes.STRING,
    password: DataTypes.STRING,
    budget: DataTypes.INTEGER
  }, {
    freezeTableName: true,
    instanceMethods: {
      hashPassword(password) {
        return bcrypt.hash(password, 8);
      },
      validatePassword(password) {
        return bcrypt.compare(password, this.password);
      }
    }
  });
  User.associate = function (models) {
    // associations can be defined here
    User.hasMany(models.list, {
      as: 'list',
    });
  };
  return User;
};
