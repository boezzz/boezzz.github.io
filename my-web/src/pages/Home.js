import React from 'react';
import './Home.css';
import '../App.css';
import '@fortawesome/fontawesome-free/css/all.css';

import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Button } from '../components/Button';

function Home() {
  return (
    <>
      <Navbar />
      <div className='home-container'>

        <div className="profile-section">

          <div className="profile-photo">
            <img src="/asset/images/profile_photo.jpeg" alt="My Profile Photo" />
          </div>

          <div className="profile-text">
            <h1>Hi<span className="wave">&#128075;</span> My name is <span className="name">Boyang 'Boe' Zhou (周博洋)</span></h1>
            <div className="social-links">
              <a
                href="https://www.linkedin.com/in/zby2003/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className='fa-brands fa-linkedin' />
              </a>
              <a
                href="https://github.com/boezzz"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className='fa-brands fa-github' />
              </a>
              <a
                href="https://x.com/boe_xr"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className='fa-brands fa-x-twitter' />
              </a>
              <a
                href="https://bsky.app/profile/boyzhou.bsky.social"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className='fa-brands fa-bluesky' />
              </a>
              <a
                href="https://scholar.google.com/citations?user=vOhAfyEAAAAJ&hl=en"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className='fa-brands fa-google-scholar' />
              </a>
              <a
                href="https://orcid.org/0009-0004-1774-4345"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className='fa-brands fa-orcid' />
              </a>
          </div>
          <p> "Computing a sustainable future, spatially"</p>
            <p> I am a master's student at the University of Washington, where I also earned my undergraduate degree in Computer Science with a minor in Environmental Studies. <i>I am currently open to PhD opportunities starting in 2026.</i></p>
            <p> I am dedicated to investigating how emerging technologies, such as AI and XR, influence human behavior and seeking innovative ways to guide their development. My goal is to ensure these technologies contribute to building a just society, where seven generations beyond us can thrive both physically and spiritually. </p>
            <p> I am currently affiliated with the <a href='https://realitylab.uw.edu/'>UW Reality Lab</a> (Student Researcher), <a href='https://makeabilitylab.cs.washington.edu/'>Makeability Lab</a> (Student Researcher), <a href='https://www.instagram.com/uw_xra/'>Extended Reality Association</a> (President), and <a href='https://csf.uw.edu/'>Campus Sustainability Fund</a> (Grant & Project Coordinator). I have previously worked for the Climate Risk Lab and the King County Department of Natural Resources and Parks.</p>
            <p> In my spare time, I enjoy reading<span>&#128218;</span>, writing<span>&#9997;</span>, cycling<span>&#128692;</span>, and sailing<span>&#9973;</span>.</p>
          </div>
        </div>

      <div className='text-section'>
        <div className='text-line'>
          <h1>Publications</h1>
          <ul>
            <li>Extended Reality and Environmental Communication: A Literature Review (Upcoming, 2025)</li>
            <li>Generative Inbetweening: Adapting Image-to-Video Models for Keyframe Interpolation (<a href='https://svd-keyframe-interpolation.github.io/'>Link</a>, 2024)</li>
          </ul>
        </div>
      </div>

      <div className='text-section'>
        <div className='text-line milestone'>
          <h1>Footsteps</h1>
          <ul>
            <li>Summer 2021: started my journey at UW CSE</li>
            <li>Summer 2022: taught CS at iDTech Camp</li>
            <li>Fall 2022: started to work on my first XR research project—MR-assisted Epidural Steroid Injection; revived the student XR club</li>
            <li>Winter 2023: with the rise of generative AI, began to think about "what I want from technology", not "technology I want"</li>
            <li>Spring 2023: found my answer through environmental philosophy classes and a couple of on-campus sustainability-related projects</li>
            <li>Summer 2023: joined the Campus Sustainability Fund and began to study environmental issues systematically</li>
            <li>Summer 2024: tried working for the government to influence policy change from the top down, and realized it's not my thing. In the end, I am still a geek</li>
            <li>Fall 2024: made the decision to pursue a PhD as I can have more freedom to create without organizational influence</li>
          </ul>
        </div>
      </div>
      

      <div className='hero-container'>
      <h1>Looking for some inspirations?</h1>
      <div className='hero-btns'>
        <Button
          className='btns'
          buttonStyle='btn--outline'
          buttonSize='btn--large'
        >
        ._Check out my blogs
        </Button>
      </div>
    </div>
    </div>
      <Footer />
    </>
  );
}

export default Home;