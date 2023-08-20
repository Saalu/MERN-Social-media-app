const router = require('express').Router()
const userCtrl = require('../controller/userCtrl')



router.route('/').get(userCtrl.getAll).post(userCtrl.createUser)

router.route('/:id' ).get(userCtrl.getSingleUser).patch(userCtrl.updateUser).delete(userCtrl.deleteUser)



module.exports = router