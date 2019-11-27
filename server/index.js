const server = require('./server')
const http = require('http').createServer(server)
const io = require('socket.io')(http)
// const {addPlayer} = require('./db/players')
const db = require('./db/players')

const port = process.env.PORT || 3000

io.on('connection', function(socket){
  socket.join('room1')
  console.log('a user connected');
  socket.on('disconnect', function(){
    console.log('user disconnected');
  })
  socket.on('join room', (roomName)=>{
    socket.join(roomName, (err)=>{console.log(err)})
    console.log('join room')
  })
  socket.on('chat message', function(msg){
    console.log(socket.rooms)
    console.log(msg)
    io.to('room1').emit('chat message', msg)
  })
  socket.on('add player', (name)=>{
    db.addPlayer(name)
  })
  socket.on('start game', ()=>{
    db.getPlayers().then(players=>
      io.to('room1').emit('start game', players)
      )
  })
})


http.listen(port, function () {
  // eslint-disable-next-line no-console
  console.log('Listening on port', port)
})

server.get('/', (req, res)=>{
  console.log('in the get route')
  res.sendfile('/index.html')
})