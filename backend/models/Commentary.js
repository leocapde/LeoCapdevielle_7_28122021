const { Sequelize, Model } = require('sequelize');
const sequelize = require('../config/database');

class Commentary extends Model {}

Commentary.init({
    id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
    },
    description: { type: Sequelize.STRING(10000), allowNull: false }
}, {
    sequelize,
    modelName: 'Commentary',
    timestamps: true,
    createdAt: true,
    updatedAt: false
})

module.exports = Commentary;