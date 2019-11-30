const environment = process.env.NODE_ENV || 'development'
const config = require('../../knexfile')[environment]
const connection = require('knex')(config)



function addPlayer(name, db = connection){
  return db('players').insert({'name': name, 'room_code': 'room1'})
  .then(thing => console.log(thing))
}

function getPlayers(db = connection){
  return db('players')
}

function removePlayer(name, db = connection){
  return db('players').where('name', name).where('room_code', 'room1').delete()
}

module.exports = {
  addPlayer,
  getPlayers,
  removePlayer
}