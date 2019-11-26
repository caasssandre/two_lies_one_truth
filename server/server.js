const path = require('path')
const express = require('express')

const server = express()


const players = require('./routes/players')

server.use(express.json())
server.use(express.static(path.join(__dirname, './public')))

server.use('/v1/players', players)

module.exports = server
