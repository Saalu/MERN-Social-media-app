import React, { useState,useEffect } from 'react'
import axios from 'axios'
import './Login.css'
import { Link, useNavigate } from "react-router-dom";
import { useDispatch,useSelector } from 'react-redux';
import './Login.css'
import { useRegisterMutation } from '../redux/usersApiSlice';
import { setCredentials } from '../redux/authSlice';



const Signup = () => {

    const [userName, setUserName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
  
    const navigate = useNavigate()
    const dsipatch = useDispatch()

    const [register, {isLoading}] = useRegisterMutation()
    const {userInfo} = useSelector(state => state.auth)

    useEffect(() => {
      if(userInfo){
       navigate('/')
 
      }
     }, [userInfo,navigate])
     

    const handleSubmit = async(e) => {
        e.preventDefault()

          try {
            const res = await register({userName,email,password}).unwrap()    
            // setUser(res.user)
            // console.log({status:res.data.status},{token:res.data.token}) 
            // localStorage.setItem('storedToken', res.data.token)
            dsipatch(setCredentials({...res}))
            console.log(res.status)
            // setIsLogin(res.status)
          setUserName('');
          setEmail('');
          setPassword('');

          navigate('/login')
   
    } catch (error) {
        console.log(error.message)
    }
    
    };
  
    return (
      <form onSubmit={handleSubmit}>
        <h3>Register User</h3>
        <input type="text" name="name" placeholder="Name *" 
        value={userName} 
        onChange={(e) => setUserName(e.target.value)} />
        <input type="email" name="email" placeholder="Email *" 
        value={email} 
        onChange={(e) => setEmail(e.target.value)} />
        <input type="password" name="password" placeholder="Password *" 
        value={password} 
        onChange={(e) => setPassword(e.target.value)} />
        <button type="submit">Create User</button>
        <p>
           
            <Link to='/login'> Already have an account?</Link>
        </p>
      </form>
    );
  };


    // =============Origin==========


export default Signup
