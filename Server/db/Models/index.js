const User = require('./users')
const Message = require('./message')
const Channel = require('./channel')

User.belongsToMany(User, {through: 'friends'})

User.hasMany(Message)
Message.belongsTo(User)

Channel.belongsToMany(User, {through: 'chat'})
User.belongsToMany(Channel, {through: 'chat'})

Message.belongsTo(Channel)
Channel.hasMany(Messages)
module.exports = {User, Message, Channel}
