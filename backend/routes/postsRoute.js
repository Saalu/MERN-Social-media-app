

import express from 'express'
import userCtrl from '../controller/userCtrl.js'
import postsCtrl from '../controller/postsCtrl.js'

const router = express.Router()
const {verifyToken} = userCtrl
const {getPosts,createPost} =postsCtrl


router.get('/', verifyToken, getPosts )
router.post('/', verifyToken, createPost )
// router.get('/:userId/posts', verifyToken, postsCtrl.getUserPosts)

// router.patch('/:id/like', verifyToken, postsCtrl.likePost)

export default router