const router = require('express').Router()
const {Message, User} = require('../db/Models')
const Channel = require('../db/Models/channel')

//GET api/channels
router.get('/', async (req, res, next) => {
  try {
    const channels = await Channel.findAll({
      //   where: {channelId: req.body.channelId},
      include: {model: User},
    })
    res.json(channels)
  } catch (err) {
    next(err)
  }
})
//GET api/channels/:channelId
router.get('/:channelId', async (req, res, next) => {
  try {
    const channels = await Channel.findByPk(req.params.channelId, {
      include: {
        model: Message,
        include: {
          model: User,
          attributes: ['id', 'Name'],
        },
        order: [Message, 'createdAt', 'DESC'],
      },
    })
    res.json(channels)
  } catch (err) {
    next(err)
  }
})

//POST /api/channels
router.post('/', async (req, res, next) => {
  try {
    const newChannel = await Channel.create(req.body)
    await req.user.addChannel(newChannel)
    res.send(newChannel)
  } catch (err) {
    next(err)
  }
})

module.exports = router
