const router = require('express').Router()
const {User} = require('../db/Models')
const Channel = require('../db/Models/channel')

//checks to see if current user matches the user on the route that was requested
//protects against someone else changing data on a user
const isLoggedInUser = (req, res, next) => {
  if (req.user && req.user.id === Number(req.params.userId)) {
    next()
  } else {
    const err = new Error('Wrong Account')
    err.status = 401
    next(err)
  }
}
router.get('/', async (req, res, next) => {
  try {
    const users = await User.findAll()
    res.send(users)
  } catch (err) {
    next(err)
  }
})

// router.get('/', isLoggedInUser, async (req, res, next) => {
//   try {
//     const userId = req.session.passport.user
//     const info = await User.findbyPK(userId, {
//       attibutes: ['Name', 'Interest', 'Image', 'TimeZone'],
//       include: Channel,
//     })
//     console.log(info)
//     if (!info) {
//       const error = new Error('User not found')
//       error.status = 404
//       throw error
//     } else if (!info.Channel) {
//       const error = new Error('User has no channels')
//       error.status = 404
//       throw error
//     } else {
//       res.send(info)
//     }
//   } catch (err) {
//     next(err)
//   }
// })

router.put('/:channelId', isLoggedInUser, async (req, res, next) => {
  try {
    const userId = req.session.passport.user
    const user = await User.findbyPK(userId)
    if (!user) {
      const error = new Error('User not found')
      error.status = 404
      throw error
    }
    const channel = await Channel.findbyPK(req.params.channelId)
    if (!channel) {
      const error = new Error('Channel not found')
      error.status = 404
      throw error
    }
    await user.addChannel(channel)
    res.send(user)
  } catch (error) {
    next(error)
  }
})

router.delete('/:channelId', isLoggedInUser, async (req, res, next) => {
  try {
    const userId = req.session.passport.user
    const user = await User.findbyPK(userId)
    if (!user) {
      const error = new Error('User not found')
      error.status = 404
      throw error
    }
    const channel = await Channel.findbyPK(req.params.channelId)
    if (!channel) {
      const error = new Error('Channel not found')
      error.status = 404
      throw error
    }
    await user.removeChannel(channel)
    res.status(200).end()
  } catch (error) {
    next(error)
  }
})
module.exports = router
