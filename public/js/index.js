const socket = io();

socket.on('connect', function() {
    console.log('Connteced to server');
});

socket.on('disconnect', function() {
    console.log('Disocnnected from server');
});

socket.on('newMessage', function(message) {
    const template = $('#message-template').html();
    let formattedTime = moment(message.createdAt).format('h:mm a');
    let html = Mustache.render(template, {
        text: message.text,
        from: message.from,
        time: formattedTime
    });

    $('#messages').append(html);
});

socket.on('newLocationMessage', function (message) {
    let formattedTime = moment(message.createdAt).format('h:mm a');
    const template = $('#location-message-template').html();

    let html = Mustache.render(template, {
        url: message.url,
        from: message.from,
        time: formattedTime
    })

    $('#messages').append(html);
});

$('#message-form').on('submit', function (e) {
    e.preventDefault();

    const messageTextbox = $('[name=message]');

    socket.emit('createMessage', {
        from: 'User',
        text: messageTextbox.val()
    }, function () {
        messageTextbox.val('');
    });
});

const locationButton = $('#send-location');
locationButton.on('click', function () {
    if (!navigator.geolocation) {
        return alert('Geolocation not supported by your browser');
    }

    locationButton.attr('disabled', 'disabled').text('Sending Location...');

    navigator.geolocation.getCurrentPosition(function (position) {
        locationButton.removeAttr('disabled').text('Send Location');
        socket.emit('createLocationMessage', {
            latitude: position.coords.latitude,
            longtitude: position.coords.longitude
        })
    }, function () {
        locationButton.removeAttr('disabled').text('Send Location');
        alert('Unable to fetch location');
    });
});