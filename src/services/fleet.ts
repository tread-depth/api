import util from '../util';
import Fleet from '../models/Fleet';

const create = async (name: string) => {
    util.logger.debug('/services/fleets/create');

    const fleet = await Fleet.query().insert({
        name,
    });

    return fleet;
};

const getAll = async () => {
    util.logger.debug('/services/fleets/getAll');

    const fleets = await Fleet.query();

    return fleets;
};

export default {
    create,
    getAll,
};
