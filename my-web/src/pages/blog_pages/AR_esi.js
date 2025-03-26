import React from 'react';
import '../../App.css';
import './Blogpage.css';

import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';


function ARESI() {
  return (
    <>
      <Navbar />

      <div className='title'>
        <h1>AR in Pain Medicine</h1>
        <h3>In collaboration with Zezhong Yang</h3>
      </div>

        <article>
            <img src='asset/images/aresi_poster.png'/>
        </article>

      <Footer />
    </>
  );
}

export default ARESI;