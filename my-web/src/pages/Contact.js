import React from 'react';
import '../App.css';
import './Contact.css';

import Navbar from '../components/Navbar';
import Footer from '../components/Footer';


function Contact() {
  return (
    <>
      <Navbar />
        <div className="contact-me-container">

        <div className="contact-hero-section">
        <div className="box">
          <span>S</span><span>T</span><span>A</span><span>Y</span>
        </div>
        <div className="box">
          <span>C</span><span>O</span><span>N</span><span>N</span><span>E</span><span>C</span><span>T</span><span>E</span><span>D</span>
        </div>
        </div>

        <div className="info-section">
          <div className="contact-info">
            <p>
              Email: boezzz333@gmail.com
            </p>
          </div>
          <div className="contact-info">
            <a href='https://www.cal.com/boe-zhou'>
              Meet with me
            </a>
          </div>
          <div className="social-links">
            <a
              href="https://www.linkedin.com/in/zby2003/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className='fa-brands fa-linkedin' />
            </a>
            <a
              href="https://github.com/boezzz"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className='fa-brands fa-github' />
            </a>
            <a
              href="https://www.instagram.com/boebo_young/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className='fa-brands fa-instagram' />
            </a>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Contact;