const server = require('./server')
const http = require('http').createServer(server)
const io = require('socket.io')(http)

const port = process.env.PORT || 3000

io.on('connection', function(socket){
  console.log('a user connected');
  socket.on('disconnect', function(){
    console.log('user disconnected');
  })
  socket.on('chat message', function(msg){
    io.emit('chat message', msg)
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