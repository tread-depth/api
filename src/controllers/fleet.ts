import { Request, Response } from 'express';

import FleetService from '../services/fleet';

const create = async (req: Request, res: Response) => {
    const { name } = req.body;

    const fleet = await FleetService.create(name);

    res.send(fleet);
};

const getAll = async (req: Request, res: Response) => {
    const fleets = await FleetService.getAll();

    res.send(fleets);
};

export default { getAll, create };
