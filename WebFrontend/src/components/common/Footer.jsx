// src/components/common/Footer.jsx
import React from 'react';
import './Footer.css'; // Assuming you create a separate CSS file for the footer

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          <a href="/about-us" className="footer-link">About Us</a>
          <span className="footer-separator">|</span>
          <a href="/privacy-policy" className="footer-link">Privacy Policy</a>
        </div>
        <div className="footer-copy">
          © 2024 Your Company. All rights reserved.
        </div>
      </div>
    </footer>
  );
}

export default Footer;



// import React from 'react';
// import { Link } from 'react-router-dom';

// const Footer = () => {
//   return (
//     <footer>
//       <Link to="/about">About Us</Link>
//       <Link to="/privacy-policy">Privacy Policy</Link>
//       <p>© 2024 Your Company. All rights reserved.</p>
//     </footer>
//   );
// };

// export default Footer;
