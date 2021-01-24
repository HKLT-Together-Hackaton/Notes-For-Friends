const Sequilize = require('sequelize')
const pkg = require('../../package.json')

const databaseName = pkg.name

const db = new Sequilize(process.env.DATABASE_URL || `postgres://locolhost/${databaseName}`, {logging: false})

module.exports = db
