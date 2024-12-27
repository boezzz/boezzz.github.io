import React from 'react';
import '../App.css';
import './Resume.css';

import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

function Resume() {
  // to add new blog, go to /components/Cards.js, and then add the new page's js under project_pages
  return (
    <>
      <Navbar />

      <div className='doc-container'>
        <iframe src="https://drive.google.com/file/d/1KIHkaGraQT_kEALfDs9TLO3lE7LjlJWU/preview"></iframe>
      </div>

      <Footer />
    </>
  );
}

export default Resume;