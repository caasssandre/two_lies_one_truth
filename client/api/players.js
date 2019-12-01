import request from 'superagent'


export function getPlayers(){
  return request
  .get('/v1/players')
  // .then(thing => console.log(thing.body))
}


export function addPlayer(name){
  return request
  .post('/v1/players')
  .send({name})
  .then(res=> res.body)
}