import React from 'react';
import '../../App.css';
import './Blogpage.css';

import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';


function Unspoken() {
  return (
    <>
      <Navbar />
        <div className='title'>
          <h1>Using XR to learn American Sign Language: challenges and opportunties</h1>
          <h3>In collaboration with Osco, Rinko, Shmoji, and Yifan</h3>
        </div>

        <article>
            <p>AWS x Meta Web XR Hackathon</p>
           
            <a href='https://ringokam.github.io/unspoken/'>
                Try the project (open the link on a passthrough enabled headset, preferably Quest 3)
            </a>

            <img src='asset/images/unspoken.png'/>
        </article>
      <Footer />
    </>
  );
}

export default Unspoken;