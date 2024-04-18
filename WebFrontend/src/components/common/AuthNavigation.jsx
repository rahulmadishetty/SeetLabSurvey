// src/components/common/AuthNavigation.jsx
import React from 'react';
import { Link } from 'react-router-dom';

function AuthNavigation() {
  return (
    <nav>
      <Link to="/">Sign In</Link> | <Link to="/signup">Sign Up</Link>
    </nav>
  );
}

export default AuthNavigation;
