const express = require('express');

const app = express();

app.use((req, res) => {
    res.json({ message: 'Voilà le début de mon app.js 😋' })
});

module.exports = app;