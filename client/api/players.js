import request from 'superagent'


export function getPlayers(room){
  console.log(room)
  return request
  .get('/v1/players?room='+ room)
  // .send({room})
  // .then(res=>res)
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