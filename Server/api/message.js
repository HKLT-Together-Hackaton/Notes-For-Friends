const router = require('express').Router()
const {Message, User} = require('../db/Models')
const channel = require('../db/Models/channel')

//GET api/messages
router.get('/', async (req, res, next) => {
  try {
    const messages = await Message.findAll({
      //   where: {channelId: req.body.channelId},
      //   include: {model: User},
    })
    res.json(messages)
  } catch (err) {
    next(err)
  }
})

//POST /api/
module.exports = router
