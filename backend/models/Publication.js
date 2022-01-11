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
    userId: { type: Sequelize.INTEGER, allowNull: false },
    description: { type: Sequelize.STRING },
    // fileUrl: { type: Sequelize.STRING },
    likes: {type: Sequelize.INTEGER, defaultValue: 0 },
    dislikes: {type: Sequelize.INTEGER, defaultValue: 0 },
    // usersLiked: [ { type: Sequelize.STRING } ],
    // usersDisliked: [ { type: Sequelize.STRING } ]
}, {
    sequelize,
    modelName: 'Publication',
    timestamps: true,
    createdAt: true,
    updatedAt: false
})

module.exports = Publication;
