const express = require('express')

const db = require('../db/players')

const router = express.Router()

router.get('/', (req, res) =>{
  console.log(req.query)
  db.getPlayers(req.query.room)
    .then(players => res.send(players))
})

router.post('/', (req, res)=>{
  db.addPlayer(req.body.name, req.body.room)
  .then(()=>{
    db.getPlayers(req.body.room)
      .then(players => res.send(players))
  })
})

router.get('/rooms', (req, res) =>{
  db.getRooms()
    .then(rooms => res.json(rooms))
})

module.exports = router