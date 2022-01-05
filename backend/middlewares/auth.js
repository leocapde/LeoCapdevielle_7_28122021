const jwt = require('jsonwebtoken');

module.exports = (req, res, next) => {
    try {
        const token = req.headers.authorization.split(' ')[1];
        req.token = jwt.verify(token, 'my_secret_token');
        if (req.body.userId && req.body.userId !== req.token.userId) {
            throw 'User ID invalide !'
        } else {
            next();
        }
    } catch {
        res.status(401).json({ error: 'Requête non authentifiée !' });
    }
};