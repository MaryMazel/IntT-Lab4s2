module.exports = (io) => {
    io.on('connection', (socket) => {
        socket.on('send message', function (msg) {
            io.emit('receive message', msg);
        });
    });
}