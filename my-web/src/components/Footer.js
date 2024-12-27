import React from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';

// footer information that display at the bottom of the page
// maybe consider adding a last updated date later
const Footer = () => {
  return (
    <footer className="footer">
      <div className="copyright">
        <p>&copy; {new Date().getFullYear()} Boe Zhou. All rights reserved.</p>
        <p>Made with <span className='love'>&#128153;&#128154;&#128156;</span> in Seattle</p>
      </div>
    </footer>
  );
};

export default Footer;