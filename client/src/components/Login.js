import React, { useState } from 'react'
import axios from 'axios'
import './Login.css'
const Login = ({setIsLogin}) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [status, setStatus] = useState('')
    const [error, setError] = useState('')

    const handleSubmit = async(e) => {
        e.preventDefault()

    try {
//   "proxy": "http://localhost:9000"
    const res = await  axios.post('http://localhost:9000/users/login', {
            email,
            password
          })
          setEmail('');
          setPassword('');

        

    console.log({status:res.data.status},{token:res.data.token}) 
    localStorage.setItem('storedToken', res.data.token)
    setIsLogin(res.data.status)
    setError(res.data.msg)
    // console.log()
} catch (error) {
    console.log(error.message)
    setError(error.response.data.msg)
    }
    
    };
  
    return (
      <form onSubmit={handleSubmit}>
           {/* <span style={{color:'green'}}>{status}</span> <br/> */}
           <span style={{color:'orange'}}  >{error}</span>
               
        <h3>_______Login_______</h3>
       
        <input type="email" name="email" placeholder="Email" 
        value={email} 
        onChange={(e) => setEmail(e.target.value)} />
        <input type="password" name="password" placeholder="Password" 
        value={password} 
        onChange={(e) => setPassword(e.target.value)} />
        <button type="submit">Sign In</button>
        <p>
            Don't have an account?
            <span> Register here</span>
        </p>
      </form>
    );
  };


    // =============Origin==========


export default Login
