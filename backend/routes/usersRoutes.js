
import express from 'express'
import userCtrl from '../controller/userCtrl.js'
const router = express.Router()



router.post('/register', userCtrl.registerUser)
router.post('/login', userCtrl.loginUser)
router.post('/logout', userCtrl.logout)
router.get('/', userCtrl.verifyToken, userCtrl.getAll)

router.route('/:id' ).get(userCtrl.getUser).patch(userCtrl.updateUser).delete(userCtrl.deleteUser)



export default router