import React from 'react';
import './Hidden.css';
import '../App.css';
import Spline from '@splinetool/react-spline';

import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

function Hidden() {
// a hidden page for fun
  return (
    <>
      <Navbar />
      <div className="hidden-container">
        <div className="spline-container">
          <Spline scene="https://prod.spline.design/RgdGGkoSQUu1Dl9f/scene.splinecode" />
        </div>
        <div className="text-container">
            <p className='text-line'>
                <span className="text-highlight"><span>&#128544;</span> Hey how did you find this page... fine, here is my real-time location</span>
            </p>
        </div>
        </div>
      <Footer />
    </>
  );
}

export default Hidden;