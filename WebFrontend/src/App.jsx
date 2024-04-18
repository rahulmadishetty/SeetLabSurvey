import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SignInForm from './components/SignInForm';
import SignUpForm from './components/SignUpForm';
import Dashboard from './Dashboard';
import './styles.css'; // Ensure this is the correct path to your styles

function App() {
  // Temporary role setting, replace this with actual authentication logic
  const userRole = 'user'; // This should come from user state or context
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<SignInForm />} />
          <Route path="/signup" element={<SignUpForm />} />
          <Route path="/dashboard" element={<Dashboard role={userRole} />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
