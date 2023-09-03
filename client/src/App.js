import React, { useState } from 'react';
import Login from './components/Login';
import Posts from './components/Posts';
import Signup from './components/Signup';
import {
  Routes,
  Route,
  Link
} from "react-router-dom";
import Dashboard from './components/Dashboard';
import Navbar from './components/Navbar';


function App() {
const [isLogin, setIsLogin] = useState(true)
const [user, setUser] = useState('')

  return (
    <React.Fragment>
    <div className="main-nav">  
    <Navbar  user={user}/>
    </div>
      {/* <div className="container">
    {  isLogin?
     (<Posts/>):
     ( <Login setIsLogin={setIsLogin}/>)
      }
    </div> */}
  
    <main className='main-container'>
      <Routes>
        <Route path='/login' element={<Login  setUser={setUser}/>} />
        <Route path='/signup' element={<Signup/>} />
        {/* <Route path='/' element={<logout/>} /> */}
        <Route path='/posts' element={<Posts/>} />
        <Route path='/dashboard' element={<Dashboard/>} />
      </Routes>
    </main>
    </React.Fragment>
  );
}

export default App;
