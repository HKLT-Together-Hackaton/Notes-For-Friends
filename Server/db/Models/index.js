const User = require('./users')
const Message = require('./message')
const Channel = require('./channel')

User.hasMany(Message)
Message.belongsTo(User)

Channel.belongsToMany(User, {through: 'chat'})
User.belongsToMany(Channel, {through: 'chat'})

Message.belongsTo(Channel)
Channel.hasMany(Message)

module.exports = {User, Message, Channel}
