import Model from '../db/model';

export interface ITruck {
    id?: string;
    name: string;
    fleet_id: string;
    axle?: string;
    application?: string;
    mileage: number;
}

class Truck extends Model {
    static get tableName() {
        return 'trucks';
    }
}

export default Truck;
