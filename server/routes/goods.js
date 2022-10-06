const { Router } = require('express')
const { getAllGoods } = require('../controllers/goods.js')


const router = new Router()


// create goods

// router.post('/')

// get all goods
router.get('/', getAllGoods)

module.exports = router