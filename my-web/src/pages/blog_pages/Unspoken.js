import React from 'react';
import '../../App.css';
import './Blogpage.css';

import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import { getProjectById } from '../../data/projects';

const projectData = getProjectById('unspoken');

function Unspoken() {
  return (
    <>
      <Navbar />
        <div className='title'>
          <h1>{projectData.title}</h1>
          {projectData.subtitle && <h3>{projectData.subtitle}</h3>}
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