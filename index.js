
const express = require('express')
const app = express();
const http = require("http");
// import { Server } from "socket.io";
const { Server } = require("socket.io");

const httpServer = http.createServer(app);
const io = new Server(httpServer, {
    // options
});

io.on("connection", (socket) => {
    console.log('new user added');


    // clint to server 
    socket.on('message', (msg) => {
        console.log(msg);

    })
    // clint to server  custom event
    socket.on('add_event', (msg) => {
        console.log(msg);

    })

    setInterval(() => {
        // server to clint    
        let date = new Date();
        socket.send(date);
        // server to clint    custom event
        let num = 1;
        socket
            .emit('custom_event', num);

    }, 1000)





    socket.on("disconnect", () => {
        console.log('new user remove');
        // ...
    });
    // ...
});

app.get('/', function (requst, response) {
    response.sendFile(__dirname + '/index.html')

})

httpServer.listen(5000, () => {
    console.log('run server');
});