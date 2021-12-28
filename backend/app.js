const express = require('express');
const sequelize = require('./config/database');

const userRoutes = require('./routes/user');

// sequelize.sync();

const app = express();

app.use(express.json());
app.use('/auth', userRoutes);

module.exports = app;