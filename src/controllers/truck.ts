import { Request, Response } from 'express';

import TruckService from '../services/truck';

const create = async (req: Request, res: Response) => {
    const { name, fleetId, mileage, axle, application } = req.body;

    const truck = await TruckService.create({
        name,
        fleet_id: fleetId,
        mileage,
        axle,
        application,
    });

    res.send(truck);
};

const get = async (req: Request, res: Response) => {
    const { id } = req.params;

    const truck = await TruckService.get(id);

    res.send(truck);
};

const getAll = async (req: Request, res: Response) => {
    const { fleetId } = req.params;

    const trucks = await TruckService.getAll(fleetId);

    res.send(trucks);
};

export default { create, get, getAll };
