import React from 'react';
import '../../App.css';
import './Blogpage.css';

import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import { getProjectById } from '../../data/projects';

const projectData = getProjectById('xr-association');

function XR_association() {
  return (
    <>
      <Navbar />

      <div className='title'>
        <h1>{projectData.title}</h1>
        {projectData.subtitle && <h3>{projectData.subtitle}</h3>}
      </div>

        <article>
            <p>The Extended Reality Association (XRA) is a student-led organization at the University of Washington dedicated to exploring and advancing XR technologies.</p>
            
            <p>As the founder and president of the XRA community, I've had the opportunity to work with fellow students who share a passion for virtual reality, augmented reality, and mixed reality technologies. 
            Our club provides a collaborative space where students from diverse backgrounds can learn about XR development, experiment with cutting-edge hardware, and create immersive experiences together.
            </p>

            <p>Through workshops, hackathons, and collaborative projects, XRA serves as a hub for innovation and learning. We work with various XR platforms and tools, 
            fostering an environment where members can develop technical skills while exploring the creative possibilities of extended reality.
            </p>

            <img 
              src="/asset/images/IMG_7594.jpg" 
              alt="XRA members at an event" 
              style={{
                width: '100%', 
                maxWidth: '800px', 
                height: 'auto',
                margin: '20px auto', 
                display: 'block',
                objectFit: 'contain'
              }}
            />

            <p>Photo. Being interviewed by Fox 13 News</p>

            <h3>Club Project Highlight: Campus 360</h3>

            We built a 360° video of the University of Washington campus using a drone and a 360° camera. and generate accessible mapping for disabled students as well as large event planning.
            <img 
              src="/asset/images/campus-360-pano.jpeg" 
              alt="Campus 360" 
              style={{
                width: '100%', 
                maxWidth: '800px', 
                height: 'auto',
                margin: '20px auto', 
                display: 'block',
                objectFit: 'contain'
              }}
            />
        </article>

      <Footer />
    </>
  );
}

export default XR_association;

