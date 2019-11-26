
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('players').del()
    .then(function () {
      // Inserts seed entries
      return knex('players').insert([
        {id: 1, name: 'Cass', room_code: 'room1'},
        {id: 2, name: 'Ollie', room_code: 'room1'},
        {id: 3, name: 'Bas', room_code: 'room1'}
      ]);
    });
};
