import React from 'react';
import '../../public/Navbar.css';
import {Link} from 'react-router-dom'

const MainNav = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">MyLogo</div>
      <div className="navbar-actions">
        <Link to="/login-page">Login</Link> <Link to="/logout-page">Logout</Link>
      </div>
    </nav>
  );
}

export default MainNav;
