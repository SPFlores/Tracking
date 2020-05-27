const { User } = require('../models')

module.exports = app => {
  app.post('/user', (req, res) => {
    User.create(req.body)
      .then(_ => res.sendStatus(200))
      .catch(e => console.log(e))
  })

  app.get('/user', (req, res) => {
    User.find({})
      .then(user => res.json(user))
      .catch(e => console.log(e))
  })

  app.get('/user/:id', (req, res) => {
    User.findOne({ _id: req.params.id })
      .then(user => res.json(user))
      .catch(e => console.log(e))
  })

  app.put('/user/:id', (req, res) => {
    User.findOneAndUpdate({ id: req.params.id }, req.body)
      .then(_ => res.sendStatus(200))
      .catch(e => console.log(e))
  })
}
