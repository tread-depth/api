import { Request, Response } from 'express';

import FleetService from '../services/fleet';
import TruckService from '../services/truck';

const create = async (req: Request, res: Response) => {
    const { name } = req.body;

    const fleet = await FleetService.create(name);

    res.send(fleet);
};

const get = async (req: Request, res: Response) => {
    const { id } = req.params;

    const fleet = await FleetService.get(id);
    const trucks = await TruckService.getAll(id);

    res.send({ ...fleet, trucks });
};

const getAll = async (req: Request, res: Response) => {
    const fleets = await FleetService.getAll();

    res.send(fleets);
};

export default { create, get, getAll };
