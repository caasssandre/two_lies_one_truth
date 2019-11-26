const express = require('express')

const db = require('../db/players')

const router = express.Router()

router.get('/', (req, res) =>{
  db.getPlayers()
    .then(players => res.send(players))
})

module.exports = router