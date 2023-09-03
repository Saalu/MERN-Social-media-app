import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const history = useLocation();

  const handleLogout = () => {
    // Remove the token from local storage
    localStorage.removeItem('token');
    // Redirect the user to the login page
    history.push('/login');
  };

  return (
    <nav>
      <ul>
        <li>
          {/* <Link to="/dashboard">Dashboard</Link> */}
          Dashboard
        </li>
        <li>
          {/* <Link to="/profile">Profile</Link> */}
          Profile
        </li>
        <li>
          <button onClick={handleLogout}>Logout</button>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
