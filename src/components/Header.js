import React from 'react';
import { Link } from 'react-router-dom';
import avatar from '../assets/avatar.png';

const Navigation = () => (
  <div>
    <nav className="navbar">
      <div className="logo-links">
        <h1 className="logo">bookstore CMS</h1>
        <ul>
          <li><Link to="/">BOOKS</Link></li>
          <li><Link to="/categories">CATEGORIES</Link></li>
        </ul>
      </div>
      <div>
        <img src={avatar} className="avatar" alt="login" />
      </div>

    </nav>

  </div>
);

export default Navigation;
