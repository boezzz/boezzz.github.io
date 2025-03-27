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

  return (
    <>
      <Navbar />

      <div className='resume-container'>
        <div className='resume-header'>
          <a 
            href="/asset/resume_siggraph_24_v0.pdf" 
            download="BoezzResume.pdf"
            className="download-link"
          >
            <i className="fa fa-download"></i> Download PDF
          </a>
        </div>
        <div className='pdf-container'>
          <object
            data="/asset/resume_siggraph_24_v0.pdf#toolbar=0"
            type="application/pdf"
            width="100%"
            height="100%"
          >
            <p>
              It appears your browser doesn't support embedded PDFs.
              <a href="/asset/resume_siggraph_24_v0.pdf">Click here to download the PDF instead.</a>
            </p>
          </object>
        </div>
      </div>

      <Footer />
    </>
  );
}

export default Resume;