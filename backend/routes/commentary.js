const express = require('express');
const router = express.Router();

const commentaryCtrl = require('../controllers/commentary');
const auth = require('../middlewares/auth');

router.post('/', auth, commentaryCtrl.createCommentary);
router.get('/one/:id', auth, commentaryCtrl.getOneCommentary);
router.get('/:id', auth, commentaryCtrl.getAllPublicationCommentaries);
router.put('/:id', auth, commentaryCtrl.updateCommentary)
router.delete('/:id', auth, commentaryCtrl.deleteOneCommentary);

module.exports = router;