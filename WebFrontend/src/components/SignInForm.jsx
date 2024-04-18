import React, { useState } from 'react';
import AuthNavigation from './common/AuthNavigation';
import '../styles.css'; // Ensure this is the correct path to your styles

function SignInForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Signing in:', { email, password, role });
  };

  return (
    <div>
      <AuthNavigation />
      <div className="form-container">
        <form onSubmit={handleSubmit} className="form">
          <h2>Sign In</h2>
          <label htmlFor="email">Email</label>
          <input type="email" id="email" value={email} onChange={e => setEmail(e.target.value)} required />

          <label htmlFor="password">Password</label>
          <input type="password" id="password" value={password} onChange={e => setPassword(e.target.value)} required />

          <label htmlFor="role">Role</label>
          <select id="role" value={role} onChange={e => setRole(e.target.value)} required>
            <option value="">Select Role</option>
            <option value="admin">Admin</option>
            <option value="user">User</option>
          </select>

          <button type="submit">Sign In</button>
        </form>
      </div>
    </div>
  );
}

export default SignInForm;
