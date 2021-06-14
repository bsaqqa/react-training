
const express = require("express");
const http = require("http");
const socketIo = require("socket.io");

const port = process.env.PORT || 4001;
const index = require("./index");

const app = express();
app.use(index);

const server = http.createServer(app);

const io = socketIo(server, {
    cors: {
        origin: "http://localhost:3000",
        methods: ["GET", "POST"]
    }
}); 


io.on("connection", (socket) => {
    console.log("New client connected");
    console.log(socket.id);
    io.emit('online', socket.id);

    socket.on("message", (d) => {
        io.emit("message", d);
    });
    
    socket.on("read-message", (messageId) => {
        io.emit("read-message", messageId);
    });
    
    socket.on("disconnect", () => {
        console.log("Client disconnected");
        io.emit('offline', socket.id);
    });
});

const getApiAndEmit = socket => {
    const response = new Date();
    // Emitting a new message. Will be consumed by the client
    socket.emit("nissren", response);
  };

server.listen(port, () => console.log(`Listening on port ${port}`));
