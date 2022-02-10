const Commentary = require('../models/Commentary');

exports.createCommentary = (req, res, next) => {
    Commentary.create({
        UserId: req.token.userId,
        PublicationId: req.body.publicationId,
        description: req.body.description
    })
    .then(() => res.status(201).json({ message: 'Nouveau commentaire ajouté !' }))
    .catch(error => res.status(400).json({ error }))
};

exports.getAllCommentaries = (req, res, next) => {
    Commentary.findAll()
    .then(commentaries => res.status(200).json( commentaries ))
    .catch(error => res.status(500).json({ error }))
};

exports.getAllPublicationCommentaries = (req, res, next) => {
    Commentary.findOne({ where: { publicationId: req.params.id } })
    .then(commentaries => res.status(200).json( commentaries ))
    .catch(error => res.status(500).json({ error }))
};

exports.deleteOneCommentary = (req, res, next) => {
    Commentary.findOne({ where: { id: req.params.id } })
    .then(commentary => {
        if (commentary.dataValues.userId === req.token.userId) {
            commentary.destroy();
            return res.status(200).json({ message: 'Commentaire supprimé !' }); 
        } else {
            return res.status(403).json({ error: 'Requête non authorisée !'})
        }
    })
};