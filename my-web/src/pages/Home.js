import React, { useEffect, useState } from 'react';
import './Home.css';
import '../App.css';
import '@fortawesome/fontawesome-free/css/all.css';

import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Button } from '../components/Button';

function Home() {
  const [showVisitorMap, setShowVisitorMap] = useState(false);
  const [showAllNews, setShowAllNews] = useState(false);
  const [isProfileLoaded, setIsProfileLoaded] = useState(false);
  const videoRef = React.useRef(null);

  const toggleVisitorMap = () => {
    setShowVisitorMap(!showVisitorMap);
  };

  const toggleNews = () => {
    setShowAllNews(!showAllNews);
  };

  const handleVideoMouseEnter = () => {
    if (videoRef.current) {
      videoRef.current.currentTime = 0;
      videoRef.current.play();
    }
  };

  const handleVideoEnded = () => {
    if (videoRef.current) {
      videoRef.current.currentTime = 0;
    }
  };

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

          <div className="profile-left">
            <div className="profile-photo">
              <video
                ref={videoRef}
                src="/asset/videos/profile_animated.mp4"
                muted
                playsInline
                autoPlay
                onLoadedData={() => setIsProfileLoaded(true)}
                onMouseEnter={handleVideoMouseEnter}
                onEnded={handleVideoEnded}
                style={{
                  opacity: isProfileLoaded ? 1 : 0,
                  transition: 'opacity 0.3s ease-in-out'
                }}
                aria-label="Boyang Zhou animated profile video"
              />
            </div>
            <div className="contact-info contact-info--desktop">
              <div className="contact-item">
                <i className='fa-solid fa-envelope' />
                <a href="mailto:zby2003@cs.washington.edu">
                  Email
                  </a>
              </div>
              <div className="contact-item">
                <i className='fa-brands fa-linkedin' />
                <a
                  href="https://www.linkedin.com/in/zby2003/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  LinkedIn
                </a>
              </div>
              <div className="contact-item">
                <i className='fa-brands fa-github' />
                <a
                  href="https://github.com/boezzz"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  GitHub
                </a>
              </div>
              <div className="contact-item">
                <i className='fa-brands fa-x-twitter' />
                <a
                  href="https://x.com/boe_xr"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  X
                </a>
              </div>
              <div className="contact-item">
                <i className='fa-brands fa-bluesky' />
                <a
                  href="https://bsky.app/profile/boyzhou.bsky.social"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Bluesky
                </a>
              </div>
              <div className="contact-item">
                <i className='fa-brands fa-google-scholar' />
                <a
                  href="https://scholar.google.com/citations?user=vOhAfyEAAAAJ&hl=en"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Google Scholar
                </a>
              </div>
            </div>
          </div>

          <div className="profile-text">
            <h1><span className="englishname">Boyang 'Boe' Zhou</span></h1>
            <h1><span className='chinesename'>周博洋</span></h1>
            <div className='tagline'>\\visual computing\\ \\environment\\</div>
            <div className='tagline'>\\HCI\\ \\application-driven ML\\</div>
            <div className="contact-info contact-info--mobile">
              <div className="contact-item">
                <i className='fa-solid fa-envelope' />
                <a href="mailto:zby2003@cs.washington.edu">Email</a>
              </div>
              <div className="contact-item">
                <i className='fa-brands fa-linkedin' />
                <a href="https://www.linkedin.com/in/zby2003/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
              </div>
              <div className="contact-item">
                <i className='fa-brands fa-github' />
                <a href="https://github.com/boezzz" target="_blank" rel="noopener noreferrer">GitHub</a>
              </div>
              <div className="contact-item">
                <i className='fa-brands fa-x-twitter' />
                <a href="https://x.com/boe_xr" target="_blank" rel="noopener noreferrer">X</a>
              </div>
              <div className="contact-item">
                <i className='fa-brands fa-bluesky' />
                <a href="https://bsky.app/profile/boyzhou.bsky.social" target="_blank" rel="noopener noreferrer">Bluesky</a>
              </div>
              <div className="contact-item">
                <i className='fa-brands fa-google-scholar' />
                <a href="https://scholar.google.com/citations?user=vOhAfyEAAAAJ&hl=en" target="_blank" rel="noopener noreferrer">Scholar</a>
              </div>
            </div>
          </div>

          <div className="bio-content">
            <p> I am a master's student at the University of Washington, where I also earned my undergraduate degree in Computer Science with a minor in Environmental Studies. <i>I am currently open to PhD opportunities starting in 2026.</i></p>
            <div className="research-focus">
              <p> I work at the intersection of human-computer interaction, computer vision, and environmental science.</p>
              
              <p>My research focuses on ecological HCI, advancing human–AI systems that empower people to capture, interpret, and act on information about their surrounding natural environments. Ultimately, I seek to design systems that help communities uncover temporal patterns in the Anthropocene driven by climate change that might otherwise remain invisible to the human eye.</p>
            </div>
            <p> I am currently affiliated with the <a href='https://makeabilitylab.cs.washington.edu/'>Makeability Lab</a> (advised by <a href='https://jonfroehlich.github.io/'>Prof. Jon Froehlich</a>) and <a href='https://realitylab.uw.edu/'>UW Reality Lab</a> (advised by <a href='https://www.irakemelmacher.com/'>Prof. Ira Kemelmacher-Shlizerman</a>, <a href='https://www.smseitz.com/home'>Prof. Steve Seitz</a>, and <a href='https://homes.cs.washington.edu/~curless/'>Prof. Brian Curless</a>). </p>
            <p> I work closely with <a href='https://jaewook-lee.com/'>Jaewook Lee</a>, <a href='https://www.linkedin.com/in/babackelmieh'>Baback Elmieh</a>, and <a href='https://jeanne-wang.github.io/'>Dr. Xiaojuan Wang</a> on my research.</p>
            <p> I have previously worked at the <a href='https://csf.uw.edu/'>Campus Sustainability Fund</a>, <a href='https://www.instagram.com/uw_xra/'>Extended Reality Association</a>, Climate Risk Lab, and the King County Department of Natural Resources and Parks.</p>
            <p> Some open-source funnzies of mine: <a href='https://github.com/torchgeo/torchgeo'>TorchGeo</a>, <a href='https://github.com/dbt-labs/dbt-fusion'>dbt-Fusion</a></p>
          </div>
        </div>

      <div className='text-section'>
        <div className='text-line'>
          <a href='#/publications' style={{ color: 'var(--primary-color)', textDecoration: 'none' }}><h1>Publications <i className='fa-solid fa-arrow-up-right-from-square'></i></h1></a>
        </div>
      </div>

      <div className='text-section'>
        <div className='text-line milestone'>
          <h1>News</h1>
          <ul>
            <li>1/2026: TA for CSE447: Natural Language Processing</li>
            <li>9/2025: TA for CSE557 graduate-level computer graphics course taught by Prof. Gilbert Bernstein</li>
            <li>8/2025: I was fortunate to be featured in the NIH AI-assisted Vision for Augmented Reality report for my work at the Makeability Lab</li>
            <li>8/2025: SIGGRAPH 2025. You can find me talking to authors after most of the paper sessions!</li>
            <li>3/2025: Speaking for the second time at The Washington Oregon Cascadia Higher Education Sustainability (WOHESC) Conference 2025</li>
            <li>3/2025: Received my undergraduate degree from UW. I can't be here without the support of everyone who helped me along the way over the past 4 years!</li>
            <li>12/2024: Wrapped up my Internship at the King County Department of Natural Resources and Parks</li>
            <li>12/2024: Paper published to ICLR [<a href='https://svd-keyframe-interpolation.github.io/'>Generative Inbetweening: Adapting Image-to-Video Models for Keyframe Interpolation</a>]</li>
            <li>10/2024: Speaking at The Association for the Advancement of Sustainability in Higher Education (AASHE) Conference 2025</li>
            <li>8/2024: VR Theater student volunteer at SIGGRAPH 2024</li>
            <li>6/2024: Student Volunteer at AWE 2024</li>
            <li>3/2024: Speaking at The Washington Oregon Cascadia Higher Education Sustainability (WOHESC) Conference 2024</li>
            {showAllNews && (
              <>
                <li>6/2023: Joined the <a href='https://csf.uw.edu/'>Campus Sustainability Fund</a> and began to study environmental issues systematically</li>
                <li>6/2022: Taught CS at iDTech Camp</li>
                <li>6/2022: Started to work on my first XR research project—MR-assisted Epidural Steroid Injection; revived the <a href='https://xra-uw.github.io/uw-xra-site/#/'>student XR club at UW</a></li>
              </>
            )}
          </ul>
          <button
            onClick={toggleNews}
            style={{
              background: 'none',
              border: 'none',
              color: 'var(--primary-color)',
              cursor: 'pointer',
              fontSize: '1rem',
              marginTop: '10px',
              textDecoration: 'underline'
            }}
          >
            {showAllNews ? '← Show less' : 'Show more →'}
          </button>
        </div>
      </div>
      

      {/* <div className='hero-container'>
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
    </div> */}
    </div>
      <Footer toggleVisitorMap={toggleVisitorMap} />
      <div style={{ textAlign: 'right' }}>
        <a href='https://mapmyvisitors.com/web/1by8m' title='Visit tracker'>
          <img src='https://mapmyvisitors.com/map.png?cl=0e1633&w=1&t=tt&d=KYawSvUri0xviH0XUuFXADAU5jT8Jz6CcEo2-YUIe20&co=0b4975&ct=cdd4d9' alt='' style={{ width: '1px', height: '1px', opacity: 0 }}/>
        </a>
      </div>

    </>
  );
}

export default Home;