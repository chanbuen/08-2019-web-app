const db = require('../db')
const Sequelize = require('sequelize')

const Test = db.define('test', {
    grade : Sequelize.INTEGER
})

module.exports = Test