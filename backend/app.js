const express = require('express');
const sequelize = require('./config/database');
const path = require('path')

const userRoutes = require('./routes/user');
const publiationRoutes = require('./routes/publication');
const commentaryRoutes = require('./routes/commentary');

// sequelize.sync({ alter: true });

const app = express();

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    next();
});
app.use(express.json());
app.use('/images', express.static(path.join(__dirname, 'images')));

app.use('/auth', userRoutes);
app.use('/publications', publiationRoutes);
app.use('/commentaries', commentaryRoutes);

module.exports = app;