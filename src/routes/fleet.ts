import express from 'express';

import FleetController from '../controllers/fleet';

const router = express.Router();

router.get('/', FleetController.getAll);
router.post('/create', FleetController.create);

export default router;
