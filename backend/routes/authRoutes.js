
import express from 'express'
import authCtrl from '../controller/authCtrl.js'
const router = express.Router()



router.post('/login', authCtrl.loginUser)
router.post('/logout', authCtrl.logout)
router.get('/', authCtrl.verifyToken, authCtrl.getAll)

// router.route('/:id' ).get(userCtrl.getSingleUser).patch(userCtrl.updateUser).delete(userCtrl.deleteUser)



export default router