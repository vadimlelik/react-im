const { Router } = require('express')
const { getAllGoods, createGoods } = require('../controllers/goods.js')
const router = new Router()


// create goods

// router.post('/')

// get all goods
router.get('/', getAllGoods)
router.post('/create-goods', createGoods)

module.exports = router