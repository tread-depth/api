/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
    return knex.schema.createTable('trucks', (t) => {
        t.increments();
        t.string('name').notNullable();
        t.integer('fleet_id').references('id').inTable('fleets');
        t.string('axle');
        t.string('application');
        t.float('mileage').notNullable();

        t.timestamp('created_at').defaultTo(knex.fn.now());
        t.timestamp('updated_at').defaultTo(knex.fn.now());
    });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
    return knex.schema.dropTable('trucks');
};
