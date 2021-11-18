const express = require('express')

const db = require('../db/orders')

const router = express.Router()

module.exports = router

router.get('/', (req, res) => {
  db.listOrders()
    .then((orders) => {
      // console.log(orders)
      res.json(orders)
      return null
    })
    .catch(err => console.error('You\'re not allowed to see these orders ', err.message))
})

router.post('/', (req, res) => {
  // console.log(req.body)
  db.addOrder(req.body)
    .then(() => {
      res.sendStatus(201)
      return null
    })
    .catch(err => console.error('Go back to Burger King! ', err.message))
})

router.patch('/', (req, res) => {
  console.log(req.body)
  db.editOrderStatus(req.body.id, req.body.newStatus)
    .then((order) => {
      res.send(order)
      return null
    })
    .catch(err => console.error('I think Carl\'s Jr. has an opening! ', err.message))
})
