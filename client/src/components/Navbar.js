import React from 'react';
import { Link,  } from 'react-router-dom';

const Navbar = ({user}) => {
//   const history = useLocation();

  const handleLogout = () => {
    // Remove the token from local storage
    localStorage.removeItem('token');
    // Redirect the user to the login page
    // history.push('/login');
  };

  return (
    <nav>
     
        <div className="nav-container">
        <h2>MernAuth</h2>
        <div className="logout">
        <ul>
        <li>
          <Link to="/dashboard">Dashboard</Link>
        </li>
       
      
        <li>
          <Link to="/posts">Posts</Link>
        </li>
        <li>
          <Link to="/login">SignIn</Link>
        </li>
        <li>
          <Link to="/signup">Signup</Link>
        </li>
      </ul>
      <span className='username'> {user}</span> 
            <button onClick={handleLogout}>Logout</button>
        </div>
      </div>
    </nav>

  );
};

export default Navbar;
