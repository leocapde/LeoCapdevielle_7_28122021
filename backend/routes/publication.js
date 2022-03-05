const express = require('express');
const router = express.Router();

const publiationCtrl = require('../controllers/publication');
const auth = require('../middlewares/auth');
const multer = require('../middlewares/multer-config');

router.post('/', auth, multer, publiationCtrl.createPublication);
router.get('/', auth, publiationCtrl.getAllPublications);
router.get('/:id', auth, publiationCtrl.getAllUserPublications);
router.get('/update/:id', auth, publiationCtrl.getOnePubblication)
router.put('/:id', auth, multer, publiationCtrl.updateOnePublication)
router.delete('/:id', auth, multer, publiationCtrl.deletePublication);

module.exports = router;