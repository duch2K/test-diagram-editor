const sequelize = require('../db');
const { DataTypes } = require('sequelize');

const Circle = sequelize.define('circle', {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true }, 
  radius: { type: DataTypes.DOUBLE, defaultValue: 40 },
  x: { type: DataTypes.DOUBLE, defaultValue: 40 },
  y: { type: DataTypes.DOUBLE, defaultValue: 40 },
  color: { type: DataTypes.STRING }
});

const Rect = sequelize.define('rect', {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true }, 
  width: { type: DataTypes.DOUBLE, defaultValue: 80 },
  height: { type: DataTypes.DOUBLE, defaultValue: 80 },
  x: { type: DataTypes.DOUBLE, defaultValue: 40 },
  y: { type: DataTypes.DOUBLE, defaultValue: 40 },
  color: { type: DataTypes.STRING }
});

module.exports = { Circle, Rect };