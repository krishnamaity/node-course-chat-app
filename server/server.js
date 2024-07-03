
const path=require('path');
const express=require('express');
const http=require('http')
const socketIo=require('socket.io');
var app=express();
const publicpath=path.join(__dirname,"../public")
const port=process.env.PORT || 3000

var server=http.createServer(app)
const io = socketIo(server); 

  app.use(express.static(publicpath))

app.get('/', function(req, res) {
    res.sendFile(path.join(publicPath, 'index.html'));
  });

  io.on('connection',(socket)=>{
    console.log('new user connected');
    

    socket.emit('newMessage',{
           
        from:'krish',
        text:"hello krish",
        createdAt:123321
    })

  socket.on('createMessage',(message)=>{
    console.log('createmessage',message)
  })
    socket.on('disconnect',()=>{
    console.log('user disconnected')
  })
  })
 
 
server.listen(port,()=>{
    console.log(`server is run at port ${port}`);
})