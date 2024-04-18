import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom'; // Import the useNavigate hook
import AuthNavigation from './common/AuthNavigation';
import '../styles.css'; // Ensure this is the correct path to your styles

function SignUpForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [role, setRole] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const navigate = useNavigate(); // Create an instance of useNavigate

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (password !== confirmPassword) {
      alert("Passwords don't match!");
      return;
    }
    if (!role) {
      alert("Please select a role!");
      return;
    }
    try {
      setLoading(true);
      const response = await axios.post('http://localhost:5000/api/auth/register', {
        name,
        email,
        password,
        role // Include the role in the request
      });
      console.log('Registered:', response.data);
      setLoading(false);
      // Display alert and navigate on OK click
      alert("Registration successful!", navigate('/dashboard', { state: { role } }));
    } catch (err) {
      setLoading(false);
      setError(err.response?.data?.message || "An error occurred during registration.");
      console.error('Registration error:', err);
    }
  };

  return (
    <div>
      <AuthNavigation />
      <div className="form-container">
        <form onSubmit={handleSubmit} className="form">
          <h2>Sign Up</h2>
          {error && <p className="error">{error}</p>}
          <label htmlFor="name">Name</label>
          <input type="text" id="name" value={name} onChange={e => setName(e.target.value)} required />

          <label htmlFor="email">Email</label>
          <input type="email" id="email" value={email} onChange={e => setEmail(e.target.value)} required />

          <label htmlFor="password">Password</label>
          <input type="password" id="password" value={password} onChange={e => setPassword(e.target.value)} required />

          <label htmlFor="confirmPassword">Confirm Password</label>
          <input type="password" id="confirmPassword" value={confirmPassword} onChange={e => setConfirmPassword(e.target.value)} required />

          <label htmlFor="role">Role</label>
          <select id="role" value={role} onChange={e => setRole(e.target.value)} required>
            <option value="">Select Role</option>
            <option value="admin">Admin</option>
            <option value="user">User</option>
          </select>

          <button type="submit" disabled={loading}>{loading ? 'Signing Up...' : 'Sign Up'}</button>
        </form>
      </div>
    </div>
  );
}

export default SignUpForm;
