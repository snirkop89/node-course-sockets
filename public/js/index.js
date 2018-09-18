const socket = io();

socket.on('connect', function() {
    console.log('Connteced to server');

    socket.emit('createMessage', {
        from: 'snir@example.com',
        text: 'Hi everyone'
    })
});

socket.on('disconnect', function() {
    console.log('Disocnnected from server');
});

socket.on('newMessage', function(message) {
    console.log('Got new message', message)
});

