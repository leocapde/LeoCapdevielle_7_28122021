const express = require('express');
const sequelize = require('./config/database');

const userRoutes = require('./routes/user');
const publiationRoutes = require('./routes/publication');

// sequelize.sync({ alter: true });

const app = express();

app.use(express.json());
app.use('/auth', userRoutes);
app.use('/publications', publiationRoutes);

module.exports = app;