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
 
        if(!user) return res.status(404).json({msg: 'User does not exist.'})
    
        const isMatch = await compare(password, user.password)
        if(!isMatch) return res.status(404).json({msg: 'Incorrect username or password.'})

        const token = jwt.sign({id:user._id}, process.env.TOKEN_SECRET,{expiresIn: '1d'})

        res.cookie('token', token, { httpOnly: true, maxAge: 3600000 }); // Max age: 1 hour

        res.status(201).json({
            status:'true',
            msg: 'Successfully Logged In',
            user: user.userName,
            userId: user.id,
            email: user.email,
            token: token
        })
        
    } catch (err) {
        res.status(500).json({status:'false', msg:err.message})

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
            status:'Successfully Logout',
        })
    } catch (err) {
        res.status(500).json({status:'failed', error: err.message})
        
    }
},   

verifyToken: async (req,res,next) => {
        try {         
            const token = req.cookies.token
    
           if(!token) return res.status(401).json({msg: ' No token provided'})
           
           jwt.verify(token, process.env.TOKEN_SECRET,(err,decoded) =>{
           if(err) return res.status(401).json({msg: 'Invalid token'})

           req.user = decoded
           
        })
        next()
            
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
getUser: async(req,res) => {
    const userId = req.params.id
    try {
      const user = await User.findById(userId, '-password')
  
      res.json({
          status:'success',
          data:user
      })
      
    } catch (err) {
      res.status(500).json({status:'failed', error:err.message})   
    }
  
  },
// UPDATE METHOD
 updateUser: async(req,res) => {   
try {

    const userId = await User.findById(req.user.id)
    console.log(userId)
    const {userName, email,password,} = req.body
    
    const user = userId
    if(user){
        user.userName = userName || user.userName
        user.email = email || user.email
        
        if(password){
                 const passwordHash = await hash(password, 10)
                user.password = passwordHash
             }

            const updatedUser = await user.save()
            
            // const updatedUser = await User.findByIdAndUpdate(user, updatedUserData, {
    //     new: true
    //   });
  
      res.json({
          status:'Updated user successfully',
          data:updatedUser
        })
    }else{
    return res.status(404).json({ msg: 'User not found' });

    }
} catch (err) {
    return res.status(500).json({ msg:err.message });
    
}
 },

// DELETE METHOD
 deleteUser: (req,res) => {   

    res.status(404).json({
    status:'success',
    data:null
})}


}


export default userCtrl