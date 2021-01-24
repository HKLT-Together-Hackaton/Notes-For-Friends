const router = require('express').Router()
const {Message, User, Channel} = require('../db/Models')

//GET api/messages
router.get('/', async (req, res, next) => {
  try {
    const messages = await Message.findAll({
      include: {model: Channel, attributes: ['id', 'name']},
    })
    res.json(messages)
  } catch (err) {
    next(err)
  }
})

//POST /api/messages/:channelId
router.post('/:channelId', async (req, res, next) => {
  try {
    console.log(req.body)
    const message = await Message.create(req.body)
    const done = await Promise.all([
      req.user.addMessage(message),
      message.setChannel(req.params.channelId),
    ])
    res.json(message)
  } catch (err) {
    next(err)
  }
})
module.exports = router
