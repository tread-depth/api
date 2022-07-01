const express = require('express');
const passport = require('passport');

const UserController = require('../controllers/user');

const router = express.Router();

router.post('/login', passport.authenticate('local'), UserController.login);
router.get('/logout', UserController.logout);
router.post('/create', UserController.create);
router.get('/:email', UserController.get);
router.get('/', UserController.getSession);

module.exports = router;
