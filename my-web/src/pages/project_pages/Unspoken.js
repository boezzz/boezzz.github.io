import React from 'react';
import '../../App.css';
import './Project.css';

import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';


function Unspoken() {
  return (
    <>
      <Navbar />
        <article>
            <h1>Unspoken</h1>
            <p>AWS x Meta Web XR Hackathon</p>
           
            <a href='https://ringokam.github.io/unspoken/'>
                &#128073; Try the project (open the link on a passthrough enabled headset, preferably Quest 3)
            </a>

            <img src='asset/images/unspoken.png'/>

            <p>In collaboration with Osco, Rinko, Shmoji, and Yifan</p>
        </article>
      <Footer />
    </>
  );
}

export default Unspoken;