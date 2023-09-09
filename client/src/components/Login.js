import React, { useState,useEffect } from 'react'
import axios from 'axios'
import { Link, useNavigate } from "react-router-dom";
import { useDispatch,useSelector } from 'react-redux';
import './Login.css'
import { useLoginMutation } from '../redux/usersApiSlice';
import { setCredentials } from '../redux/authSlice';

const Login = ({setUser, setIsLogin}) => {
  const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [status, setStatus] = useState('')
    const [error, setError] = useState('')
    
    const navigate = useNavigate()
    const dsipatch = useDispatch()

    const [login, {isLoading}] = useLoginMutation()
    const {userInfo} = useSelector(state => state.auth)

    useEffect(() => {
     if(userInfo){
      navigate('/profile')

     }
    }, [userInfo,navigate])
    

    const handleSubmit = async(e) => {
        e.preventDefault()
    try {
    const res = await login({email,password}).unwrap()
          setEmail('');
          setPassword('');

        
          navigate('/profile')
          console.log(res.status)
          // setUser(res.user)
    // console.log({status:res.data.status},{token:res.data.token}) 
    // localStorage.setItem('storedToken', res.data.token)
    dsipatch(setCredentials({...res}))
    setIsLogin(res.status)
    // setError(res.data.msg)
} catch (error) {
    console.log(error.message)
    // setError(error.response.data.msg )
    }
    
    };
  
    return (
      <form onSubmit={handleSubmit}>
           {/* <span style={{color:'green'}}>{status}</span> <br/> */}
           <span style={{color:'orange'}}  >{error}</span>
               
        <h3>_______Login_______</h3>
       
        <input type="email" name="email" placeholder="Email *" 
        value={email} 
        onChange={(e) => setEmail(e.target.value)} />
        <input type="password" name="password" placeholder="Password *" 
        value={password} 
        onChange={(e) => setPassword(e.target.value)} />
        <button type="submit">Sign In</button>
        <p>
        <Link to='/signup'>  Don't have an account? </Link>
        </p>
      </form>
    );
  };


    // =============Origin==========


export default Login
