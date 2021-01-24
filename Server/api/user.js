const router = require('express').Router()
const {User} = require('../db/Models')
const Channel = require('../db/Models/channel')

module.exports = router

router.get('/', async (req, res, next) => {
  try {
    const userId = req.session.passport.user
    if (!userId) {
      const error = new Error('User not logged in')
      error.status = 404
      throw error
    }
    const info = await User.findbyPK(userId, {
      attibutes: ['Name', 'Interest', 'Image', 'TimeZone'],
      include: Channel,
    })
    console.log(info)
    if (!info) {
      const error = new Error('User not found')
      error.status = 404
      throw error
    } else if (!info.Channel) {
      const error = new Error('User has no channels')
      error.status = 404
      throw error
    } else {
      res.send(info)
    }
  } catch (err) {
    next(err)
  }
})
