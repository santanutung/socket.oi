
const express = require('express')
const app = express();
const http = require("http");
// import { Server } from "socket.io";
const { Server } = require("socket.io");

const httpServer = http.createServer(app);
const io = new Server(httpServer, {
    // options
});




// broadcasting

// io.on("connection", (socket) => {
//     console.log('new user added');



//     io.sockets.emit('broadcasting_event_for_all', "hi good morning")

//     socket.on("disconnect", () => {
//         console.log('new user remove');
//     });
// });


let buyNsp = io.of('/buy');
buyNsp.on("connection", (socket) => {

    io.sockets.emit('broadcasting_event_for_buy', "hi for sell")


});

let SellNsp = io.of('/sell');
SellNsp.on("connection", (socket) => {




    io.sockets.emit('broadcasting_event_for_sell', "hi for sell")


});


app.get('/', function (requst, response) {
    response.sendFile(__dirname + '/index.html')

})

httpServer.listen(5000, () => {
    console.log('run server');
});