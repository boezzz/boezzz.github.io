import React from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="copyright">
        <p>&copy; {new Date().getFullYear()} Boe Zhou. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;