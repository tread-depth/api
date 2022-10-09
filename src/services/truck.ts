import util from '../util';
import Truck, { ITruck } from '../models/Truck';

const create = async (truck: ITruck) => {
    util.logger.debug('/services/trucks/create');

    const newTruck = await Truck.query().insert(truck);

    return newTruck;
};

const get = async (id: string) => {
    util.logger.debug('/services/trucks/get');

    const truck = await Truck.query().findById(id);

    return truck;
};

const getAll = async (fleetId: string) => {
    util.logger.debug('/services/trucks/getAll');

    const trucks = await Truck.query().where('fleet_id', fleetId);

    return trucks;
};

export default {
    create,
    get,
    getAll,
};
