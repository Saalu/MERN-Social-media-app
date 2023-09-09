import React, { useEffect, useState } from 'react';
import Login from './components/Login';
import Posts from './components/Posts';
import Signup from './components/Signup';
import {
  Routes,
  Route,
  Link,
  useNavigate
} from "react-router-dom";
import Dashboard from './components/Home';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Profile from './components/Profile';
import PrivateRoute from './components/PrivateRoute';


function App() {
const [isLogin, setIsLogin] = useState(false)
const [user, setUser] = useState('')

const navigate = useNavigate()



  return (
    <React.Fragment>
    <div className="main-nav">  
    <Navbar isLogin={isLogin} />
    </div>
      {/* <div className="container">
    {  isLogin?
     (<Posts/>):
     ( <Login setIsLogin={setIsLogin}/>)
      }
    </div> */}
  
    <main className='main-container'>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login setIsLogin={setIsLogin}  setUser={setUser}/>} />
        <Route path='/signup' element={<Signup/>} />
      <Route path='/' element={<logout/>} />
        <Route path='' element={<PrivateRoute/>} >
        <Route path='/posts' element={<Posts/>} />
        <Route path='/profile' element={<Profile/>} />
        </Route>
        {/* <Route path='/dashboard' element={<Dashboard/>} /> */}
      </Routes>
    </main>
    </React.Fragment>
  );
}

export default App;
