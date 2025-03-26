import React from 'react';
import '../../App.css';
import './Blogpage.css';

import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';


function XRCooking() {
  return (
    <>
      <Navbar />

      <div className='title'>
        <h1>Having a virtual co-chef is a better idea than you thought</h1>
        <h3>In collaboration with Ben Kosa and Timothy Morris</h3>
      </div>

        <article>
            <p>Developed in Unity, work with Quest 3 or any headset with OpenXR support.</p>
            <p>Does a killer app in XR really exist? Maybe this killer app isn’t a single 'app' but rather millions of apps customized by AI for each one of us. Using XR to aid cooking has been a regularly explored domain by both large organizations and individual developers, yet there hasn’t been any significant practical adoption. Some argue that if we create a more compact form factor, everything will suddenly be magically solved.</p>

            <p>But will it? What would motivate people who currently use tablets, phones, or even paper and pen to transition to XR? I believe the secret lies in accomplishing something uniquely tailored to individual users. For example, providing college students with a way to creatively use leftover ingredients, helping manage a messy kitchen without constantly searching for clean measuring cups or extra timers, or offering an easy way to adapt recipes to use produce that would otherwise go to waste. An AI agent integrated with the XR medium could cleverly achieve these and much more by generating recipes, step-by-step cooking instructions, and helpful tools, all while making real-time customized adjustments. </p>
            

            <video controls>
                <source
                    src="asset/videos/cooking_compressed.mp4"
                    type="video/mp4" />
                Your browser does not support the video tag.
            </video>
        </article>

      <Footer />
    </>
  );
}

export default XRCooking;