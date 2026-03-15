import React from 'react';
import '../../App.css';
import './Blogpage.css';

import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import { getProjectById } from '../../data/projects';

const projectData = getProjectById('ar-health-tracking');

function AR_health_tracking() {
  return (
    <>
      <Navbar />

      <div className='title'>
        <h1>{projectData.title}</h1>
        {projectData.subtitle && <h3>{projectData.subtitle}</h3>}
      </div>

        <article>
            <p>Connected my Garmin (heart rate sensor) to the Frame AR glasses. What if you can see the moments that made you happy or sad? Hopefully it will become an active area of research. </p>
            <img
              src="/asset/images/frame-images.jpeg"
              alt="Photos captured by Frame AR glasses"
              style={{
                width: '100%',
                maxWidth: '800px',
                height: 'auto',
                margin: '20px auto',
                display: 'block',
                objectFit: 'contain'
              }}
            />

            <p>Some pictures taken from my Frame AR glasses</p>
        </article>

      <Footer />
    </>
  );
}

export default AR_health_tracking;
