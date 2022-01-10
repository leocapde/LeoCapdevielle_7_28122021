const Publication = require('../models/Publication');
const fs = require('fs');
const UsersLiked = require('../models/Publication');
const UsersLike = require('../models/Publication');

exports.createPublication = (req, res, next) => {
    Publication.create({
        userId: req.token.userId,
        description: req.body.description
    })
    .then(() => res.status(201).json({ message: 'Nouvel publication créée !' }))
    .catch(error => res.status(400).json({ error }))
};

exports.getAllPublications = (req, res, next) => {
    Publication.findAll()
    .then(publications => res.status(200).json( publications ))
    .catch(error => res.status(400).json({ error }))
};

exports.deletePublication = (req, res, next) => {
    Publication.findOne({ where: { id: req.params.id } })
    .then(publication => {
        if (publication.dataValues.userId === req.token.userId) {
            publication.destroy()
            return res.status(200).json({ message: 'Publication supprimée !' });
        } else {
            return res.status(403).json({ error: 'Requête non authorisée !'})
        }
    })
    .catch(error => res.status(500).json({ error }))
};
