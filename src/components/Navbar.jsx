import React from 'react';
import { Link } from 'react-router-dom';
import '../css/Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <ul className="navbar-list">
        <li className="navbar-item">
          <Link to="/" className="navbar-link">Home</Link>
        </li>
        <li className="navbar-item">
          <Link to="/blog" className="navbar-link">Blog</Link>
        </li>
        <li className="navbar-item">
        <Link to="/post" className="navbar-link">Post</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
