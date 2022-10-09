import express from 'express';

import TruckController from '../controllers/truck';

const router = express.Router();

router.get('/:fleetId', TruckController.getAll);
router.get('/:id', TruckController.get);
router.post('/create', TruckController.create);

export default router;
