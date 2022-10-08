import express from 'express';
import passport from 'passport';

import UserController from '../controllers/user';

const router = express.Router();

router.get('/', UserController.getSession);
router.get('/:email', UserController.get);
router.get('/logout', UserController.logout);

router.post('/login', passport.authenticate('local'), UserController.login);
router.post('/create', UserController.create);

export default router;
