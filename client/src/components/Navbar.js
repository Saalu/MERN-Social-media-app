import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch,useSelector } from 'react-redux';
import { useLogoutMutation } from '../redux/usersApiSlice';
import { logout } from '../redux/authSlice';

const Navbar = ({isLogin}) => {
const navigate = useNavigate()
const dsipatch = useDispatch()

// const [login, {isLoading}] = useLoginMutation()
const {userInfo} = useSelector(state => state.auth)
const [logoutApiCall] = useLogoutMutation()

  const handleLogout = async() => {
    // Remove the token from local storage
    // localStorage.removeItem('token');
    await logoutApiCall().unwrap()
    dsipatch(logout())
    navigate('/')
  };

  return (
    <nav>
     
        <div className="nav-container">
          {
           userInfo?.user ? <span className='username'>Welcome {userInfo.user}</span> :
           <h2><Link to='/'>TestLogo</Link></h2>
          }
        <div className="logout">
       
       {
         userInfo?.user ? (
          <ul>
          <li><Link to="/profile">Profile</Link></li>
          <li> <Link to="/posts">Posts</Link></li>
      </ul>

        ):(
          <ul>

          <li><Link to="/login">SignIn</Link> </li>
         <li><Link to="/signup">Signup</Link></li>
          </ul>
        )
       }
      {
        isLogin &&    <button onClick={handleLogout}>Logout</button>
      }
        </div>
      </div>
    </nav>

  );
};

export default Navbar;
