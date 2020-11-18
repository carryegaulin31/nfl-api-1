const Sequelize = require('sequelize')
const teamsModel = require('./teams')

const connection = new Sequelize('nfl', 'football', 'Dalla$$', { // database,user name, password, object with host and dialect
  host: 'localhost', dialect: 'mysql'
})

const Teams = teamsModel(connection, Sequelize) // this is a function from heroes.js so pass it two params like in heroes.js in models

module.exports = { Teams }
