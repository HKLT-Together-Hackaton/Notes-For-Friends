const router = require('express').Router()
const {Message, User} = require('../db/Models')
const Channel = require('../db/Models/channel')

//GET api/channels
router.get('/', async (req, res, next) => {
  try {
    const channels = await Channel.findAll({
      //   where: {channelId: req.body.channelId},
      //   include: {model: User},
    })
    res.json(channels)
  } catch (err) {
    next(err)
  }
})

//POST /api/
module.exports = router
