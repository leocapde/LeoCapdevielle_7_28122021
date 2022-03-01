const Publication = require('../models/Publication');
const User = require('../models/User')
const Commentary = require('../models/Commentary')
const fs = require('fs');

exports.createPublication = (req, res, next) => {
    if (req.file) {
        Publication.create({
            UserId: req.token.userId,
            description: JSON.parse(req.body.description),
            fileUrl: `${req.protocol}://${req.get("host")}/images/${req.file.filename}`
        })
        .then(() => res.status(201).json({ message: 'Nouvel publication créée !' }))
        .catch(error => res.status(400).json({ error }))
    } 
    else {
        Publication.create({
            UserId: req.token.userId,
            description: req.body.description
        })
        .then(() => res.status(201).json({ message: 'Nouvel publication créée !' }))
        .catch(error => res.status(400).json({ error }))
    }
};

exports.getAllPublications = (req, res, next) => {
    const userAttributes = ['id', 'firstName', 'lastName', 'imageUrl']
    Publication.findAll({ 
        order: [
            ['createdAt', 'DESC'],
            [Commentary, 'createdAt', 'ASC']
        ],
        include: [
            { 
                model: User, 
                attributes: userAttributes 
            },
            { 
                model: Commentary, 
                include: { 
                    model: User,
                    attributes: userAttributes
                } 
            }
        ]
    })
    .then(publications => res.status(200).json( publications ))
    .catch(error => res.status(400).json({ error }))
};

exports.getAllUserPublications = (req, res, next) => {
    const userAttributes = ['id', 'firstName', 'lastName', 'imageUrl']
    Publication.findAll({ 
        where: { UserId: req.params.id },
        order: [
            ['createdAt', 'DESC'],
            [Commentary, 'createdAt', 'ASC']
        ],
        include: [
            { 
                model: User, 
                attributes: userAttributes 
            },
            { 
                model: Commentary, 
                include: { 
                    model: User,
                    attributes: userAttributes
                } 
            }
        ]
    })
    .then(publications => res.status(200).json( publications ))
    .catch(error => res.status(400).json({ error }))
};

exports.deletePublication = (req, res, next) => {
    Publication.findOne({ where: { id: req.params.id } })
    .then(publication => {
        if (publication.dataValues.UserId === req.token.userId) {
            if (publication.fileUrl) {
                const filename = publication.fileUrl.split("/images/")[1]
                fs.unlink(`images/${filename}`, () => {
                    publication.destroy();
                    return res.status(200).json({ message: 'Publication supprimée !' });        
                })
            } 
            else {
                publication.destroy();
                return res.status(200).json({ message: 'Publication supprimée !' });
            }
        } else {
            return res.status(403).json({ error: 'Requête non authorisée !'})
        }
    })
    .catch(error => res.status(500).json({ error }))
};
