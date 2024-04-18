import React, { useState } from 'react';
import AuthNavigation from './common/AuthNavigation';
import '../styles.css'; // Ensure this is the correct path to your styles

function SignUpForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    if (password !== confirmPassword) {
      alert("Passwords don't match!");
      return;
    }
    console.log('Signing up:', { name, email, password });
  };

  return (
    <div>
      <AuthNavigation />
      <div className="form-container">
        <form onSubmit={handleSubmit} className="form">
          <h2>Sign Up</h2>
          <label htmlFor="name">Name</label>
          <input type="text" id="name" value={name} onChange={e => setName(e.target.value)} required />

          <label htmlFor="email">Email</label>
          <input type="email" id="email" value={email} onChange={e => setEmail(e.target.value)} required />

          <label htmlFor="password">Password</label>
          <input type="password" id="password" value={password} onChange={e => setPassword(e.target.value)} required />

          <label htmlFor="confirmPassword">Confirm Password</label>
          <input type="password" id="confirmPassword" value={confirmPassword} onChange={e => setConfirmPassword(e.target.value)} required />

          <button type="submit">Sign Up</button>
        </form>
      </div>
    </div>
  );
}

export default SignUpForm;
