exports.up = function (knex) {
  return knex.schema.createTable('cars', table =>{
    table.increments()
    table.string('vin', 17).notNullable().unique()
    table.string('make', 128).notNullable()
    table.string('model', 128).notNullable()
    table.integer('mileage').notNullable()
    table.string('title', 128).defaultTo('N/A')
    table.string('transmission', 128).defaultTo('N/A')
  })
};

exports.down = function (knex) {
  return knex.schema.dropTableIfExists('cars')
};
