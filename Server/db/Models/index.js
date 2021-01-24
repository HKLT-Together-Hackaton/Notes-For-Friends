import User = require('./users')

User.hasMany(User, {through: "friends"})

module.exports = {User}