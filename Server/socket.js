const channel = require('./db/Models/channel')

module.exports = (io) => {
  io.on('connection', (socket) => {
    console.log(`A socket connection to the server has been made: ${socket.id}`)

    //All socket event listeners go here

    socket.on('new-message', (message) => {
      socket.broadcast.emit('new-message', message)
    })

    socket.on('new-channel', (channel) => {
      socket.broadcast.emit('new-channel', channel)
    })

    socket.on('disconnect', () => {
      console.log(`Connection ${socket.id} has left the building`)
    })
  })
}
