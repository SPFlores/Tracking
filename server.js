const express = require('express')
const { join } = require('path')
const app = express()
const { User } = require('./models')
require('dotenv').config()

app.use(express.static(join(__dirname, 'client', 'build')))
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

// app.use(require('express-session')({
//   secret: 'help',
//   resave: false,
//   saveUninitialized: false
// }))

require('./routes')(app)

require('mongoose').connect(process.env.MONGO_LINK, { useNewUrlParser: true, useFindAndModify: true, useCreateIndex: true })
  .then(_ => {
    app.listen(process.env.PORT || 3001)
    console.log('this is working')
  })
  .catch(e => console.log(e))
