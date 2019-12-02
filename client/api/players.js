import request from 'superagent'


export function getPlayers(room){
  console.log(room)
  return request
  .get('/v1/players')
  .send({room})
  // .then(thing => console.log(thing.body))
}


export function addPlayer(name, room){
  // console.log(name + room)
  return request
  .post('/v1/players')
  .send({name, room})
  .then(res=> res.body)
}