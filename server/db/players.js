const environment = process.env.NODE_ENV || 'development'
const config = require('../../knexfile')[environment]
const connection = require('knex')(config)



function addPlayer(name, room, db = connection){
  return db('players').insert({'name': name, 'room_code': room})
  .then(thing => thing)
}

function getPlayers(room, db = connection){
  console.log('from db' + room)
  return db('players').where('room_code', room)
}

// function removePlayer(name, db = connection){
//   return db('players').where('name', name).where('room_code', 'room1').delete()
// }

module.exports = {
  addPlayer,
  getPlayers,
  // removePlayer
}