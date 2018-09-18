const socket = io();

socket.on('connect', function() {
    console.log('Connteced to server');
});

socket.on('disconnect', function() {
    console.log('Disocnnected from server');
});

socket.on('newMessage', function(message) {
    console.log('Got new message', message);
    let li = $('<li></li>');
    li.text(`${message.from}: ${message.text}`);

    $('#messages').append(li);
});

$('#message-form').on('submit', function (e) {
    e.preventDefault();

    socket.emit('createMessage', {
        from: 'User',
        text: $('[name=message]').val()
    }, function () {

    });
});