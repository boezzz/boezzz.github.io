import React from 'react';
import '../../App.css';
import './Blogpage.css';

import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';


function Forward_to_past() {
  return (
    <>
      <Navbar />
        <div className='title'>
          <h1>Teaching history through conversation</h1>
          <h3>In collaboration with Rylan Pozniak Daniels</h3>
        </div>


        <article>
            <p>Award: AI track winner for Stanford XR hackathon 2023</p>
            <p>Forward To The Past is a VR historical education app for Meta Quest 3 that uses AI-generated interactions with historical characters to make education more accessible to the masses. You can literally speak via the Quest's microphone to communicate with historical figures like Montezuma of the Aztecs, a pharaoh of Ancient Egypt, and a samurai using AI. You can start with simple questions such as "Who are you?" or "What are we looking at?" and then progress to more in-depth queries like "What pivotal roles did you play during the Sengoku period, and what are your favorite military strategies?"  </p>

            <iframe src="https://www.youtube.com/embed/l2rWn4R1-hk?si=CNA07or-1IOvCfhw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            <p></p>
            <a href='https://devpost.com/software/forward-to-the-future'>
                Link to project devpost
            </a>
        </article>
      <Footer />
    </>
  );
}

export default Forward_to_past;