const path = require('path')
const express = require('express')
const morgan = require('morgan')
const session = require('express-session')
const SequelizeStore = require('connect-session-sequelize')(session.Store)
const db = require('./db')
const sessionStore = new SequelizeStore({db})
const passport = require('passport')
const PORT = process.env.PORT || 3000
const socketio = require('socket.io')
const app = express()

if (process.env.NODE_ENV !== 'production') require('../secrets')

passport.serializeUser((user, done) => done(null, user.id))

passport.deserializeUser(async (id, done) => {
  try {
    const user = await db.models.user.findByPk(id)
    done(null, user)
  } catch (err) {
    done(err)
  }
})

// logging middleware
app.use(morgan('dev'))

// body parsing middleware
app.use(express.json())
app.use(express.urlencoded({extended: false}))

//session middleware with passport
app.use(
  session({
    secret: process.env.SESSION_SECRET,
    store: sessionStore,
    resave: false,
    saveUninitialized: false,
  })
)
app.use(passport.initialize())
app.use(passport.session())

//Routes
app.use('/auth', require('./auth'))
app.use('/api', require('./api'))

// static file-serving middleware
app.use(express.static(path.join(__dirname, '../Public')))

// any remain requests with an extension (.js, .css, etc.) send 404
app.use((req, res, next) => {
  if (path.extname(req.path).length) {
    const err = new Error('Not found')
    err.status = 404
    next(err)
  } else {
    next()
  }
})

//Sends index.hmtl
app.use('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../Public/index.html'))
})

// error handling endware
app.use((err, req, res, next) => {
  console.error(err)
  console.error(err.stack)
  res.status(err.status || 500).send(err.message || 'Internal server error.')
})

const bootApp = async () => {
  //Start listening (and create a 'server' object representing our server)
  const server = app.listen(PORT, () => {
    console.log(`Live at http://localhost:${PORT}`)
  })

  //set up our socket control center
  const io = socketio(server)
  require('./socket')(io)
}

bootApp()

module.exports = app
