
exports.up = function(knex, Promise) {
  return knex.schema.createTable('players', (table) => {
    table.increments('id').primary
    table.string('name')
    table.string('room_code')
  })
};

exports.down = (knex, Promise) => {
  return knex.schema.dropTable('beers')
}