const express = require('express')

const db = require('../db/products')

const router = express.Router()

module.exports = router

router.get('/', (req, res) => {
  db.listProducts()
    .then((products) => {
      // setTimeout(() => {
      //   res.json(products)
      // }, 1000)
      res.json(products)
      return null
    })
    .catch((err) => {
      res.status(500).send('DATABASE ERROR: ' + err.message)
    })
})

router.post('/', (req, res) => {
  db.addProduct(req.body)
    .then(() => {
      res.sendStatus(201)
      return null
    })
    .catch(err => console.error('Who do you think you are, God!! ', err.message))
})

router.delete('/', (req, res) => {
  db.deleteProduct(req.body.id)
    .then(() => {
      res.sendStatus(200)
      return null
    })
    .catch(err => console.error('This isn\'t going anywhere! ', err.message))
})

router.patch('/', (req, res) => {
  db.updateProduct(req.body)
    .then(() => {
      res.sendStatus(200)
      return null
    })
    .catch(err => console.error('Don\'t you dare try to change me! ', err.message))
})
