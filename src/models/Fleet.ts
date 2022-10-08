import Model from '../db/model';

interface Fleet {
    id: string;
    name: string;
}

class Fleet extends Model {
    static get tableName() {
        return 'fleets';
    }
}

export default Fleet;
