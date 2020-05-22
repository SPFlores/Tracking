const { Food } = require('../models')

module.exports = app => {
  app.post('/food', (req, res) => {
    Food.create(req.body)
      .then(_ => res.sendStatus(200))
      .catch(e => console.log(e))
  })

  app.get('/food', (req, res) => {
    Food.find({})
      .then(food => res.json(food))
      .catch(e => console.log(e))
  })

  app.get('/food/:id', (req, res) => {
    Food.findOne({ id: req.params.id })
      .then(food => res.json(food))
      .catch(e => console.log(e))
  })

  app.put('/food/:id', (req, res) => {
    Food.findOneAndUpdate({ id: req.params.id }, req.body)
      .then(_ => {
        res.sendStatus(200)
      })
      .catch(e => console.log(e))
  })

  app.get('/watchlist', (req, res) => {
    Food.find({ watchlist: true })
      .then(food => res.json(food))
      .catch(e => console.log(e))
  })
  app.put('/watchlist/:id', (req, res) => {
    Food.findOneAndUpdate(req.params.id, { watchlist: true })
      .then(_ => res.sendStatus(200))
      .catch(e => console.log(e))
  })
}
