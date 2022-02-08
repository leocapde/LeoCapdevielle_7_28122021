const { Sequelize, Model } = require('sequelize');
const sequelize = require('../config/database');

class Publication extends Model {}

Publication.init({
    id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
    },
    description: { type: Sequelize.STRING },
    fileUrl: { type: Sequelize.STRING }
}, {
    sequelize,
    modelName: 'Publication',
    timestamps: true,
    createdAt: true,
    updatedAt: false,
})

module.exports = Publication;
