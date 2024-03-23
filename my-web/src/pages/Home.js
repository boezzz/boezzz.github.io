import React from 'react';
import './Home.css';
import '../App.css';
import Spline from '@splinetool/react-spline';

import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Button } from '../components/Button';

function Home() {
  return (
    <>
      <Navbar />
      <div className="home-container">
        <div className="spline-container">
          <Spline scene="https://prod.spline.design/RgdGGkoSQUu1Dl9f/scene.splinecode" />
        </div>
        <div className="text-container">
            <p className='text-line'>
                I am at <span className="text-highlight">Seattle, WA</span>
            </p>
            <p className='text-line'>
                I am
                <div className='scroller'>
                    <span className="text-highlight">
                        coding XR projects<br />
                        empowering sustainability<br />
                        reading history books<br />
                        collecting old laptops
                    </span>
                </div>
            </p>
            <p className='text-line'>
                I want to <span className="text-highlight shuffle">prove to people what we are capable of, which is beyond imaginable, and there's still hope</span>
            </p>
        </div>
        </div>

      <div className='hero-container'>
      <h1>Hi <span className='wave'>&#128075;</span> Looking for some inspirations?</h1>
      <div className='hero-btns'>
        <Button
          className='btns'
          buttonStyle='btn--outline'
          buttonSize='btn--large'
        >
          Check out my works
        </Button>
      </div>
    </div>
      <Footer />
    </>
  );
}

export default Home;