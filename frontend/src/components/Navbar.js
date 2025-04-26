import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'; //

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="nav-logo">🎓CBIT Student DB</div>
      <div className="nav-links">
        <Link to="/" className="nav-link">Home</Link>
        <Link to="/add" className="nav-link">Add Student</Link>
        <Link to="/view" className="nav-link">Student Records</Link>
      </div>
    </nav>
  );
};

export default Navbar;
