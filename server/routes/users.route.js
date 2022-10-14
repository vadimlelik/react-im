const { Router } = require('express')

const router = new Router()




//  get All users

router.get('/')

// crete users

router.post('/')

// delete uses

router.delete('/:id')

// edit user

router.put('/:id')


module.exports = router