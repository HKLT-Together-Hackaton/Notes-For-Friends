// const router = require('express').Router()
// const {Message, User} = require('../db');
// const channel = require('../db/Models/channel');

// module.exports = router;

// //GET api/messages
// router.get('/', async (req, res, next) => {
//     try {
//         const messages = await Message.findAll({where: {channelId: req.body.channelId}, include: { model: User, attributes: [Name]}})
//         res.json(messages)
//     } catch (err) {
//         next(err)
//     }
// })

// //POST /api/
