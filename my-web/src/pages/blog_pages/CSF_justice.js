import React from 'react';
import '../../App.css';
import './Blogpage.css';

import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import { getProjectById } from '../../data/projects';

const projectData = getProjectById('csf-justice');

function CSF_justice() {
  return (
    <>
      <Navbar />

      <div className='title'>
        <h1>{projectData.title}</h1>
        {projectData.subtitle && <h3>{projectData.subtitle}</h3>}
      </div>

        <article>
            <p>
            During my two years at CSF, I worked with some of the most lovely people I’ve ever met. Working on environmental justice forever changed my life path. You can read more about the work I did at CSF through this interview transcript:
            </p>
            <a href="https://facilities.uw.edu/blog/posts/2025/05/16/congratulations-2025-uwf-graduates#maeda">
                [Link to blogpost]
            </a>

            <p>
              I worked on a variety of envrionmentl/cultural/justice projects at CSF. You can explore the project portfolio to see more of the work I did at CSF
            </p>
            <a href="https://csf.uw.edu/projects">
                [Link to CSF Project Portfolio]
            </a>

            <p> I will write more about it when I have more time...</p>


            <img src="asset/images/aashe.jpeg" alt="AASHE 2024. Men presenting at AASHE 2024, Anaheim, CA" />
            <p>
              [Pic 1] Presenting my work at AASHE 2024, Anaheim, CA
            </p>
        </article>

      <Footer />
    </>
  );
}

export default CSF_justice;

