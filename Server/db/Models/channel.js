const Sequelize = require('sequelize')
const db = require('../')

module.exports = db.define('channel', {
  name: Sequelize.STRING,
})
