const express = require('express');
const router = express.Router();

const commentaryCtrl = require('../controllers/commentary');
const auth = require('../middlewares/auth');

router.post('/:id', auth, commentaryCtrl.createCommentary);
router.get('/', auth, commentaryCtrl.getAllCommentaries); // Uniquement pour le dvp
router.get('/:id', auth, commentaryCtrl.getAllPublicationCommentaries);
router.delete('/:id', auth, commentaryCtrl.deleteOneCommentary);

module.exports = router;