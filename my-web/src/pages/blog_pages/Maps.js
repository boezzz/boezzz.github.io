import React from 'react';
import '../../App.css';
import './Blogpage.css';

import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import { getProjectById } from '../../data/projects';

const projectData = getProjectById('maps');

function Maps() {
  return (
    <>
      <Navbar />

      <div className='title'>
        <h1>{projectData.title}</h1>
        {projectData.subtitle && <h3>{projectData.subtitle}</h3>}
      </div>

        <article>
            <p>At King County DNRP, I worked on/used many maps in this catalog: <a href="https://www5.kingcounty.gov/sdc/" target="_blank" rel="noopener noreferrer">https://www5.kingcounty.gov/sdc/</a></p>

            More to come...
        </article>

      <Footer />
    </>
  );
}

export default Maps;
