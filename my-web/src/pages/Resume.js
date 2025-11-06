import React, { useEffect } from 'react';
import '../App.css';
import './Resume.css';

import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

function Resume() {
  useEffect(() => {
    // Set page title and scroll to top when component mounts
    document.title = "Boe Zhou | Resume";
    window.scrollTo(0, 0);
  }, []);

  // Detect if mobile device for better PDF handling
  const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);

  return (
    <>
      <Navbar />

      <div className='resume-container'>
        <div className='resume-header'>
          <a 
            href="/asset/resume.pdf" 
            download="BoeZhouResume.pdf"
            className="download-link"
          >
            <i className="fa fa-download"></i> Download PDF
          </a>
        </div>
        <div className='pdf-container'>
          {isMobile ? (
            // Use iframe for better mobile compatibility
            <iframe
              src="/asset/resume.pdf"
              title="Resume PDF"
              width="100%"
              height="100%"
              style={{ border: 'none' }}
            >
              <p>
                It appears your browser doesn't support embedded PDFs.
                <a href="/asset/resume.pdf">Click here to download the PDF instead.</a>
              </p>
            </iframe>
          ) : (
            // Use object tag for desktop
            <object
              data="/asset/resume.pdf#toolbar=0"
              type="application/pdf"
              width="100%"
              height="100%"
            >
              <embed
                src="/asset/resume.pdf#toolbar=0"
                type="application/pdf"
                width="100%"
                height="100%"
              />
              <p>
                It appears your browser doesn't support embedded PDFs.
                <a href="/asset/resume.pdf">Click here to download the PDF instead.</a>
              </p>
            </object>
          )}
        </div>
      </div>

      <Footer />
    </>
  );
}

export default Resume;