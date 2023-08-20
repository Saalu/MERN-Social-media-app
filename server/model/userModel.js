import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
    firstName:{
        type:String,
        required:[true, 'This field is required'],
        trim: true,
        min:2,
        max:50

    },
   
    lastName:{
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
    picturePath:{
        type:String,
        default:""
    },
    friends:{
        type:Array,
        default:[]
    },
    location:String,
    occupation: String,
    viewedProfile: Number,
    impressions: Number,

}, {tiimestamps:true})


 const User = mongoose.model('user', userSchema)

 export default User