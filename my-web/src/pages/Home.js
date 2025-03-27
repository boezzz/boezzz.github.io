import React, { useEffect } from 'react';
import './Home.css';
import '../App.css';
import '@fortawesome/fontawesome-free/css/all.css';

import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Button } from '../components/Button';

function Home() {
  useEffect(() => {
    // Observer for when elements enter/exit the viewport
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate');
        } else {
          entry.target.classList.remove('animate');
        }
      });
    }, { threshold: 0.1 });
    
    const headings = document.querySelectorAll('.text-line h1');
    headings.forEach(heading => {
      observer.observe(heading);
    });

    // Variables for scroll detection
    let scrollTimeout;
    const handleScroll = () => {
      // Add animate class to visible headings during scroll
      document.querySelectorAll('.text-line h1').forEach(heading => {
        const rect = heading.getBoundingClientRect();
        const isVisible = 
          rect.top < window.innerHeight && 
          rect.bottom > 0;
        
        if (isVisible) {
          heading.classList.add('animate');
        }
      });
      
      // Clear the timeout if it's been set
      if (scrollTimeout) {
        clearTimeout(scrollTimeout);
      }
      
      // Set a timeout to run after scrolling stops
      scrollTimeout = setTimeout(() => {
        document.querySelectorAll('.text-line h1').forEach(heading => {
          heading.classList.remove('animate');
        });
      }, 1000);
    };
    
    // Add scroll event listener
    window.addEventListener('scroll', handleScroll);
    
    // Cleanup function
    return () => {
      headings.forEach(heading => {
        observer.unobserve(heading);
      });
      window.removeEventListener('scroll', handleScroll);
      if (scrollTimeout) {
        clearTimeout(scrollTimeout);
      }
    };
  }, []);

  return (
    <>
      <Navbar />
      <div className='home-container'>

        <div className="profile-section">

          <div className="profile-photo">
            <img src="/asset/images/profile_photo.jpeg" alt="My Profile Photo" />
          </div>

          <div className="profile-text">
            <h1><span className="englishname">Boyang 'Boe' Zhou</span></h1>
            <h1><span className='chinesename'>周博洋</span></h1>
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
          <div className='tagline'>"Computing a sustainable future, spatially"</div>
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
            <li>Extended Reality and Environmental Communication: A Literature Review [Upcoming]</li>
            <li>Generative Inbetweening: Adapting Image-to-Video Models for Keyframe Interpolation [<a href='https://svd-keyframe-interpolation.github.io/'>Link</a>, ICLR 2025]</li>
          </ul>
        </div>
      </div>

      <div className='text-section'>
        <div className='text-line'>
          <h1>Conferences</h1>
          <ul>
            <li><b>Session Speaker</b>: The Washington Oregon Cascadia Higher Education Sustainability (WOHESC) Conference 2025 </li>
            <li><b>Session Speaker</b>: The Association for the Advancement of Sustainability in Higher Education (AASHE) Conference 2025</li>
            <li><b>VR Theater</b>: SIGGRAPH 2024</li>
            <li><b>Panel Speaker</b>: The Washington Oregon Cascadia Higher Education Sustainability (WOHESC) Conference 2024</li>
          </ul>
        </div>
      </div>

      <div className='text-section'>
        <div className='text-line milestone'>
          <h1>Footsteps</h1>
          <ul>
            <li>Summer 2021: moved to the US from Nanjing, China. began my journey at UW</li>
            <li>Summer 2022: taught CS at iDTech Camp</li>
            <li>Fall 2022: started to work on my first XR research project—MR-assisted Epidural Steroid Injection; revived the student XR club</li>
            <li>Winter 2023: with the rise of generative AI, began to think about "what I want from technology", not "technology I want"</li>
            <li>Spring 2023: found my answer through environmental philosophy classes and a couple of on-campus sustainability-related projects</li>
            <li>Summer 2023: joined the Campus Sustainability Fund and began to study environmental issues systematically</li>
            <li>Summer 2024: tried working for the government to influence policy change from the top down, and realized it's not my thing. In the end, I am still a geek</li>
            <li>Fall 2024: made the decision to pursue a PhD as I can have more freedom to create without organizational influence</li>
            <li>Winter 2025: first paper published!</li>
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