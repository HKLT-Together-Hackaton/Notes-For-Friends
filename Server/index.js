const express = require('express')
// const path = require('path')
const PORT = process.env.PORT || 3000

const socket = require('socket.io')
const io = socket()

const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: false }))

// app.use(express.static(path.join(__dirname, + '../Public')))

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, + '../Public/index.html'))
})

app.listen(PORT, () =>{
    console.log(`Live at http://localhost:${PORT}`)
})

module.exports = app
