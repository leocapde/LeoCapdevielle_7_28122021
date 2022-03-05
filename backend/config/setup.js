const express = require('express');
const database = require('./database');

const userRoutes = require('../routes/user');
const publiationRoutes = require('../routes/publication');
const commentaryRoutes = require('../routes/commentary');

database.sync({ alter: true });

const app = express();

app.use('/auth', userRoutes);
app.use('/publications', publiationRoutes);
app.use('/commentaries', commentaryRoutes);