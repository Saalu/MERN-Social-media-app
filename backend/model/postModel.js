
 import mongoose from 'mongoose'

const postSchema = new mongoose.Schema({
    userId:{
        type:String,
        
    },
    title:{
        type:String,
        required:[true, 'A NFT must have a name'],
        trim: true

    },
    content:{
        type:String,
        required:[true, 'must provide a duration']

    },
    creator:{
        type:String,
        trim: true
    },
    impressions: Number,
   
    createdAt:{
        type: Date,
        default: Date.now()
    },

})


const Post  = mongoose.model('post', postSchema)

  
 export default Post