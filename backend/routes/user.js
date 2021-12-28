const express = require('express');
const router = express.Router();

const userCrtl = require('../controllers/user');
const auth = require('../middlewares/auth');
const multer = require('../middlewares/multer-config');

router.post('/signup', userCrtl.signup);
router.post('/login', userCrtl.login);
router.get('/', userCrtl.getAllUsers); // Uniquement pour le dvp
router.put('/:id', auth, multer, userCrtl.modifyUser);
router.delete('/:id', auth, multer, userCrtl.deleteUser);

module.exports = router;