const path = require('path');
const http = require('http');
const express = require('express')
const socketio = require('socket.io');

const {generateMessage} = require('./utils/message');

const publicPath = path.join(__dirname, '../public');
const port = process.env.PORT || 3000;

const app = express();
const server = http.createServer(app);
const io = socketio(server);

app.use(express.static(publicPath))

io.on('connection', (socket) => {
    console.log('New user connceted');

    socket.emit('newMessage', generateMessage('Admin', 'Welcome to the chat app'));

    socket.broadcast.emit('newMessage', generateMessage('Admin', 'New user has joined'));

    socket.on('createMessage', (message) => {
        console.log('Create message:', message);
        io.emit('newMessage', generateMessage(message.from, message.text));
        // socket.broadcast.emit('newMessage', {
        //     from: message.from,
        //     text: message.text,
        //     createdAt: new Date().getTime()
        // });
    })

    socket.on('disconnect', () => {
        console.log('User was disconnected');
    })
});


server.listen(port, () => {
    console.log(`Server is up on port ${port}`);
});