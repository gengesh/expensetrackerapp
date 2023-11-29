const Sequelize = require('sequelize');
const sequelize = require('../util/database');
const User = sequelize.define('User',{
  id:{
    type:Sequelize.INTEGER,
    autoIncrement:true, 
    allowNull:false,
    primaryKey:true
  },
  name:Sequelize.STRING,
  email:{
    type:Sequelize.STRING,
    unique:true
  },
  password:Sequelize.STRING,
  ispremiumuser:Sequelize.BOOLEAN,
  totalExpense:{
    type:Sequelize.INTEGER,
    defaultValue: 0,
  }
});
module.exports = User;