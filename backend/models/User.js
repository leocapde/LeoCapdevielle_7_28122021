const { Sequelize, Model } = require('sequelize');
const sequelize = require('../config/database');

class User extends Model {}

User.init({
    id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
    },
    email: { type: Sequelize.STRING, allowNull: false, unique: true },
    password: { type: Sequelize.STRING, allowNull: false },
    lastName: { type: Sequelize.STRING, allowNull: false },
    firstName: { type: Sequelize.STRING, allowNull: false },
    isAdmin: { type: Sequelize.BOOLEAN, defaultValue: false }
    // ,
    // imageUrl: { type: Sequelize.STRING }
}, {
    sequelize,
    modelName: 'User',
    timestamps: false,
    createdAt: false,
    updatedAt: false
});

module.exports = User;