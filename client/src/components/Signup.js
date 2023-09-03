import React, { useState } from 'react'
import axios from 'axios'
import { useNavigate } from "react-router-dom";
import './Login.css'




const Signup = () => {
  const navigate = useNavigate()

    const [userName, setUserName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
  
    const handleSubmit = async(e) => {
        e.preventDefault()

    try {
//   "proxy": "http://localhost:9000"
    const res = await  axios.post('http://localhost:9000/users/register', {
            userName,
            email,
            password
          })
          setUserName('');
          setEmail('');
          setPassword('');

          navigate('/login')
       console.log(res.data.status) 
    } catch (error) {
        console.log(error.message)
    }
    
    };
  
    return (
      <form onSubmit={handleSubmit}>
        <h3>Register User</h3>
        <input type="text" name="name" placeholder="Name" 
        value={userName} 
        onChange={(e) => setUserName(e.target.value)} />
        <input type="email" name="email" placeholder="Email" 
        value={email} 
        onChange={(e) => setEmail(e.target.value)} />
        <input type="password" name="password" placeholder="Password" 
        value={password} 
        onChange={(e) => setPassword(e.target.value)} />
        <button type="submit">Create User</button>
      </form>
    );
  };


    // =============Origin==========


export default Signup
