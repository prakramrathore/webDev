// const express = require('express');
// const app = express();
// const port = 8000;
const express = require('express');
const app = express();
const http = require('http');
const server = http.createServer(app);
const { Server } = require("socket.io");
const io = new Server(server);
const path = require('path');


// const io = require('socket.io')(`${port}`);

const users = {};

io.on('connection', socket => {
    // If any new user joins, let other users connected to the server know!
    socket.on('new-user-joined', name =>{
        console.log(name);
        users[socket.id] = name;
        socket.broadcast.emit('user-joined', name);
    });

    // If someone sends a message, broadcast it to other people
    socket.on('send', message =>{
        socket.broadcast.emit('receive', {message: message, name: users[socket.id]})
    });

    // If someone leaves the chat, let others know 
    socket.on('disconnect', message =>{
        socket.broadcast.emit('left', users[socket.id]);
        delete users[socket.id];
    });
})

// require("./route/route.js")(app);

// let options = {
//     dotfiles: "allow", //allow, deny, ignore
//     etag: true,
//     extensions: ['html', 'pug', 'css', 'js'],
//     index: false, //to disable directory indexing
//     maxAge: "7d",
//     redirect: false,
//     setHeader: function(res, path, stat){
//         // ass this header to all static responses
//         res.set("x-timestamp", Date.now());
//     }
// };

// Express specific stuff
app.use(express.static('../static'));
app.use(express.urlencoded({extended:false}));
 
// PUG specific stuff
app.set('views', path.join(__dirname, '../views')); //Set the view directory
app.set('view engine', 'pug'); //Set the template engine as pug

// Endpoints
app.get('/', (req,res)=>{
    res.status(200).render('home.pug');
})


// Start the server
// app.listen(port, ()=>{
//     console.log(`server is started at http://127.0.0.1:${port}`);
// })

server.listen(8000, () => {
  console.log(`listening on http://127.0.0.1:8000`);
});