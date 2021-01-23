module.exports = io => {
    io.on('connection', socket => {
        console.log(`A socket connection to the server has been made: ${socket.id}`)
    
        //All socket event listeners go here
        socket.on('disconnect', () => {
            console.log(`Connection ${socket.id} has left the building`)
        })
    })
}