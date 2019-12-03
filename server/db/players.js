const environment = process.env.NODE_ENV || 'development'
const config = require('../../knexfile')[environment]
const connection = require('knex')(config)



function addPlayer(name, room, db = connection){
  return db('players').insert({'name': name, 'room_code': room})
  .then(player => player)
}

function getPlayers(room, db = connection){
  return db('players').where('room_code', room)
}

function getRooms(db = connection){
  return db('players')
  .distinct()
  .pluck('room_code')
  .then(rooms=> rooms)
}

// function removePlayer(name, db = connection){
//   return db('players').where('name', name).where('room_code', 'room1').delete()
// }

module.exports = {
  addPlayer,
  getPlayers,
  // removePlayer,
  getRooms
}