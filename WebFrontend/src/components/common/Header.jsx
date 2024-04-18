import React from 'react';
import { Link } from 'react-router-dom';

const Header = ({ user }) => {
  return (
    <header>
      <nav>
        <Link to="/dashboard">Dashboard</Link>
        <Link to="/contact-us">Contact Us</Link>
        <Link to="/reports">Reports</Link>
        {user === 'admin' ? (
          <Link to="/admin">Admin</Link>
        ) : (
          <Link to="/user">User</Link>
        )}
        <div className="profile-icon">Profile</div>
      </nav>
    </header>
  );
};

export default Header;
