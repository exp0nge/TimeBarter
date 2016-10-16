'use strict';
const models = require('../models');

/*
initUsername: Username of barter who initiated the trade
secondaryUsername: Username of barter being initiated upon
*/

module.exports = function(sequelize, DataTypes) {
  var Transaction = sequelize.define('Transaction', {
    initUsername: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: true
      }
    },
    secondaryUsername: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: true
      }
    },
    accepted: {
      type: DataTypes.BOOLEAN,
      defaultValue: null
    },
    canceled: { // valid only if responded === True
      type: DataTypes.BOOLEAN,
      defaultValue: false
    },
    canceledReason: DataTypes.TEXT
  }, {
    classMethods: {
      associate: function(models) {
        Transaction.hasMany(models.Milestone);
      }
    }
  });
  return Transaction;
};
