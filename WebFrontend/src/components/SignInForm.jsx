import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom'; // For redirecting
import AuthNavigation from './common/AuthNavigation';
import '../styles.css';

function SignInForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const navigate = useNavigate(); // Hook for navigation

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);
    try {
      const response = await axios.post('http://localhost:5000/api/auth/login', {
        email,
        password
      });
      setLoading(false);
      // Assuming the response includes the role; otherwise, adjust as needed.
      navigate('/dashboard', { state: { role } }); // Pass the role to the dashboard
    } catch (err) {
      setLoading(false);
      setError('Failed to log in. Please check your credentials.');
      console.error('Login error:', err);
    }
  };

  return (
    <div>
      <AuthNavigation />
      <div className="form-container">
        <form onSubmit={handleSubmit} className="form">
          <h2>Sign In</h2>
          {error && <div className="error">{error}</div>}
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

          <button type="submit" disabled={loading}>{loading ? 'Logging In...' : 'Sign In'}</button>
        </form>
      </div>
    </div>
  );
}

export default SignInForm;
