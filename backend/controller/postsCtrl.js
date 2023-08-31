import jwt from 'jsonwebtoken';
import {hash,compare} from 'bcrypt';
import Post from '../model/postModel.js'
import User from '../model/userModel.js';


const postsCtrl = {

createPost: async (req,res) => {
    try {
      const id = req.user.id
      const {userId, title,content,creator,impressions} = req.body
      const user = await User.findById(id)
      // console.log({user})
    
       const newPost = new Post({
        userId:user._id,
        title, 
        content,
        creator: user.userName,
        impressions:Math.floor(Math.random() * 10000),
       
       })

       const posts = await newPost.save()
      // const posts = await Post.find()
        res.status(201).json({
            status:' success',
            msg:`${user.userName}, created a new post  `,
            data: posts,
        })
        
    } catch (err) {
        res.status(409).json({status:'failed', error:err.message})
    }},
// GET METHOD
getPosts: async(req,res) => {   
  try {
    const posts = await Post.find()
    res.json({
        status:'success',
        results: posts.length,
        data:posts
    })
    
  } catch (err) {
    res.status(404).json({status:'failed', error:err.message})   
  }
},
// GET SINGLE METHOD
 getUserPosts: async(req,res) => {   
    try {
        const {userId} = req.params
        const post = await Post.findById(userId)
        res.json({
            status:'success',
            results: post.length,
            data:post
        })
        
      } catch (err) {
        res.status(404).json({status:'failed', error:err.message})   
      }
    },
// DELETE METHOD
 deleteUser: (req,res) => {   

    if( req.params.id * 1 > nfts.length){
        return res.status(404).json({
            status:'fail',
            message: 'Invalid ID'
        })
    }

    res.status(404).json({
    status:'success',
    data:null
})}

}


export default postsCtrl