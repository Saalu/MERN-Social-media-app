import mongoose from 'mongoose';

const postSchema = new mongoose.Schema({
    userId:{
        type:String,
        required:true
    },
   
    firstName:{
        type:String,
        required:true
    },
   
    lastName:{
        type:String,
        required:true,
        trim: true,
        max:50,
    },
    location:String,
    description:String,
    picturePath:String,
    jobtitle: String,
   

}, {tiimestamps:true})


 const Post = mongoose.model('post', postSchema)

 export default Post