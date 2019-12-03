import request from 'superagent'


export function getPlayers(room){
  return request
  .get('/v1/players')
  .send({room})
}


export function addPlayer(name, room){
  return request
  .post('/v1/players')
  .send({name, room})
  .then(res=> res.body)
}

export function getRooms(){
  return request
  .get('/v1/players/rooms')
}