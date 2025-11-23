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
            
            
            Read more about the work I did at CSF through this Interview Transcript
            <a href="https://facilities.uw.edu/blog/posts/2025/05/16/congratulations-2025-uwf-graduates#maeda">
                [Link to blogpost]
            </a>

            Visit the CSF Project Portfolio to see more of the work I did at CSF
            <a href="https://csf.uw.edu/projects">
                [Link to CSF Project Portfolio]
            </a>

            
            <img src="asset/images/aashe.jpeg" alt="AASHE 2024" />
            Presenting my work at AASHE 2024, Anaheim, CA
        </article>

      <Footer />
    </>
  );
}

export default CSF_justice;

