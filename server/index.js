const server = require('./server')
const http = require('http').createServer(server)
const io = require('socket.io')(http)
const db = require('./db/players')

const port = process.env.PORT || 3000

io.on('connection', function(socket){
  console.log('a user connected');
  socket.on('disconnect', function(){
    console.log('user disconnected');
  })
  socket.on('join room', (roomName)=>{
    socket.join(roomName)
  })
  // socket.on('chat message', function(msg){
  //   io.to('room1').emit('chat message', msg)
  // })
  // socket.on('remove player', (name)=>{
  //   db.removePlayer(name)
  // })
  socket.on('start game', (room)=>{
    db.getPlayers(room).then(players=>
      io.to(room).emit('start game', players)
      )
  })
  socket.on('add response', response =>{
    io.to(response.room).emit('add response', response)
  })
})


http.listen(port, function () {
  // eslint-disable-next-line no-console
  console.log('Listening on port', port)
})

server.get('/', (req, res)=>{
  // console.log('in the get route')
  res.sendfile('/index.html')
})