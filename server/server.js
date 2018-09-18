const path = require('path');
const http = require('http');
const express = require('express')
const socketio = require('socket.io');

const publicPath = path.join(__dirname, '../public');
const port = process.env.PORT || 3000;

const app = express();
const server = http.createServer(app);
const io = socketio(server);

app.use(express.static(publicPath))

io.on('connection', (socket) => {
    console.log('New user connceted');

    socket.emit('newMessage', {
        from: 'snir@example.com',
        text: 'Can you meet me at 6?',
        createdAt: new Date().toTimeString()
    })

    socket.on('createMessage', (message) => {
        console.log('Create message:', message);
    })

    socket.on('disconnect', () => {
        console.log('User was disconnected');
    })
});


server.listen(port, () => {
    console.log(`Server is up on port ${port}`);
});