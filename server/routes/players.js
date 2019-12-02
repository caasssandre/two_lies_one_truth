const express = require('express')

const db = require('../db/players')

const router = express.Router()

router.get('/', (req, res) =>{
  db.getPlayers(req.body.room)
    .then(players => res.send(players))
})

router.post('/', (req, res)=>{
  db.addPlayer(req.body.name, req.body.room)
  .then(()=>{
    db.getPlayers(req.body.room)
      .then(players => res.send(players))
  })
})

module.exports = router