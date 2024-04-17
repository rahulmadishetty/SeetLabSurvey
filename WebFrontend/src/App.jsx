import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import SignInForm from './components/SignInForm';
import SignUpForm from './components/SignUpForm';
import './styles.css'; // Ensure this is the correct path to your styles

function App() {
  return (
    <Router>
      <div>
        <nav>
          <Link to="/">Sign In</Link> | <Link to="/signup">Sign Up</Link>
        </nav>
        <Routes>
          <Route path="/" element={<SignInForm />} />
          <Route path="/signup" element={<SignUpForm />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
