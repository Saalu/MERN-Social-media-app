import jwt from 'jsonwebtoken';
import {hash,compare} from 'bcrypt';
import User from '../model/userModel.js'


 const userCtrl = {

registerUser: async (req,res) => {
    try {
       const {userName, email,password,} = req.body

       const user = await User.findOne({email})
       if(user) return res.status(404).json({msg: 'User already exist'})

       const passwordHash = await hash(password, 10)

       const newUser = new User({
       userName,
        email,
        password:passwordHash,
      
       })

     const storeUser =  await newUser.save()

        res.status(201).json({
            status:'registration success',
            data: storeUser,
        })
        
    } catch (err) {
        res.status(500).json({status:'failed', error:err.message})

    }},

loginUser: async (req,res) => {
    try {

        const { email,password,} = req.body
        const user = await User.findOne({email})
 
        if(!user) return res.status(404).json({msg: 'User does not exist'})
    
        const isMatch = await compare(password, user.password)
        if(!isMatch) return res.status(404).json({msg: 'Invalid credentials'})

        const token = jwt.sign({id:user._id}, process.env.TOKEN_SECRET,{expiresIn: '1d'})

        res.cookie('token', token, { httpOnly: true, maxAge: 3600000 }); // Max age: 1 hour
        res.status(201).json({
            status:'Logged in successfully',
            msg:`${user.userName}, you logged in`,
            token: token
        })
        
    } catch (err) {
        res.status(500).json({status:'failed', msg:err.message})

    }},

logout: async(req,res) =>{
    try {
        res.cookie('token', "", 
        // {
        //     httpOnly: true,
        //     expires: new Date(0)
        // }
        
        )

        res.status(201).json({
            status:'logout success',
        })
    } catch (err) {
        res.status(500).json({status:'failed', error:err.message})
        
    }
},   

verifyToken: async (req,res,next) => {
        try {
         
            const token = req.cookies.token
    
           if(!token) return res.status(401).json({msg: ' No token provided'})
           
           jwt.verify(token, process.env.TOKEN_SECRET,(err,decoded) =>{
           if(err) return res.status(401).json({msg: 'Invalid token'})

           req.user = decoded
           next()

           })
            
        } catch (err) {
            res.status(500).json({status:'failed', error:err.message})
    
        }},

// GET METHOD
 getAll: async(req,res) => {
    
  try {
    const users = await User.find()

    res.json({
        status:'success',
        results: users.length,
        data:users
    })
    
  } catch (err) {
    res.status(500).json({status:'failed', error:err.message})   
  }

},
// GET SINGLE METHOD

// UPDATE METHOD
 updateUser: (req,res) => {   

    res.json({
    status:'success',
    data:"Updating nft"
})},
// DELETE METHOD
 deleteUser: (req,res) => {   

    res.status(404).json({
    status:'success',
    data:null
})}


}


export default userCtrl