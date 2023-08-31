import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({  
    userName:{
        type:String,
        required:[true, ' required field'],
        trim: true,
        max:50,
    },
   
    email:{
        type:String,
        required:[true, 'Email is required'],
        trim: true,
        max:50,
        unique:true
    },
    password:{
        type:String,
        required:[true, 'Password is required'],
        trim: true,
        min:5,
    },


}, {tiimestamps:true})


 const User = mongoose.model('user', userSchema)

 export default User