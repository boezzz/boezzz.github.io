import React from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';

// footer information that display at the bottom of the page
// maybe consider adding a last updated date later
const Footer = ({ toggleVisitorMap }) => {
  return (
    <footer className="footer">
      <div className="copyright">
        <p>&copy; {new Date().getFullYear()} Boyang Zhou</p>
        <p>
           No Artificial Dyes
          {toggleVisitorMap && (
            <span 
              onClick={toggleVisitorMap}
              className="hidden-button"
              title="Toggle visitor map"
            >
            .
            </span>
          )}
        </p>
      </div>
    </footer>
  );
};

export default Footer;