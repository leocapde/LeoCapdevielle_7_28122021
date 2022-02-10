const User = require('../models/User');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const fs = require('fs');

exports.signup = (req, res, next) => {
    bcrypt.hash(req.body.password, 10)
    .then(hash => {
        User.create({
            email: req.body.email,
            password: hash,
            lastName: req.body.lastName,
            firstName: req.body.firstName
        })
        .then(() => res.status(201).json({ message: 'Nouvel utilisateur créé !' }))
        .catch(error => res.status(400).json({ error }))
    })
    .catch(error => res.status(500).json({ error }))
};

exports.login = (req, res, next) => {
    User.findOne({ where: { email: req.body.email }})
    .then(user => {
        if (!user) {
            res.status(401).json({ message: 'Utilisateur introuvable...' })
        }
        else {
            bcrypt.compare(req.body.password, user.dataValues.password)
            .then(valid => {
                if (!valid) {
                    res.status(401).json({ message: 'Mot de passe incorrect !' })
                }
                else {
                    res.status(200).json({
                        userId: user.dataValues.id,
                        token: jwt.sign(
                            {userId: user.dataValues.id},
                            "my_secret_token",
                            {expiresIn: "24h"}
                        )
                })
                }
            })
            .catch(error => res.status(500).json({ error }))
        }
    })
    .catch(error => res.status(500).json({ error }))
};

exports.getCurrentUser = (req, res, next) => {
    User.findOne({ where: { id: req.token.userId }})
    .then(user => res.status(200).json( user ))
    .catch(error => res.status(400).json({ error }))
}

exports.getOneUser = (req, res, next) => {
    User.findOne({ where: { id: req.params.id }})
    .then(user => res.status(200).json( user ))
    .catch(error => res.status(400).json({ error }))
}

exports.modifyUser = (req, res, next) => {
    User.findOne({ where: { id: req.params.id }})
    .then(user => {
        if (user.dataValues.id === req.token.userId) {
            const userObject = req.file ? 
            {
                ...JSON.parse(req.body.user),
                imageUrl: `${req.protocol}://${req.get("host")}/images/${req.file.filename}`
            } : {...req.body};
            user.update({ ...userObject })
            return res.status(200).json({ message: 'Utilisateur modifié'})
        } else {
            return res.status(403).json({ error: 'Requête non authorisée !'})
        }
    })
    .catch(error => res.status(500).json({ error }))
};

exports.deleteUser = (req, res, next) => {
    User.findOne({ where: { id: req.params.id }})
    .then(user => {
        if (user.dataValues.id === req.token.userId) {
            console.log(req.file);
            if (req.file) {
                const filename = sauce.imageUrl.split("/images/")[1];
                fs.unlink(`images/${filename}`, () => {
                    user.destroy();
                    return res.status(200).json({ message: 'Utilisateur supprimé !' });
                })
            } else {
                user.destroy();
                return res.status(200).json({ message: 'Utilisateur supprimé !' });
            }
        } else {
            return res.status(403).json({ error: 'Requête non authorisée !'})
        }
    })
    .catch(error => res.status(500).json({ error }))
};