const { Schema, model } = require('mongoose')

const db = {
  User: require('./User.js')(Schema, model),
  Food: require('./Food.js')(Schema, model),
  Weight: require('./Weight.js')(Schema, model)
}

module.exports = db
