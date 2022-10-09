import Model from '../db/model';
import Truck from './Truck';

export interface IFleet {
    id: string;
    name: string;
    trucks: Truck[];
}

class Fleet extends Model {
    static get tableName() {
        return 'fleets';
    }
}

export default Fleet;
