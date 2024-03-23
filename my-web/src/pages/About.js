import React, { useState, useEffect, useRef } from 'react';
import '../App.css';
import './About.css';

import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

// Import sticker images
import sticker1 from './stickers/uw_logo.png';
import sticker2 from './stickers/csf_logo.png';
import sticker3 from './stickers/xra_mascot.png';
import sticker4 from './stickers/asuw_logo.png';
import sticker5 from './stickers/rl-logo.png';
import sticker6 from './stickers/hugsi_logo.png';
import sticker7 from './stickers/id_tech_logo.png';
import image7 from './images/id_drawing.jpg';

function About() {
  const [selectedSticker, setSelectedSticker] = useState(null);
  const overlayRef = useRef(null);

  const stickers = [
    { id: 1, image: sticker1, story: 
      <div className='overlay-text'>
        I am an undergraduate student at the University of Washington studying <u>Computer Science</u> and <u>Environmental Studies.</u>
        <br /><br />
        Awards: Mary gates scholar, 2021~2024 dean's list recipient
      </div>
    },
    { id: 2, image: sticker2, story:
      <div className='overlay-text'>
        I currently hold the position of Grant & Project Coordinator for the Campus Sustainability Fund. In this role, I assist prospective project teams in navigating the grant application process and support active project teams through check-in meetings, partnership building, and resource sharing. My goal is to connect technology, such as AI and XR, with the creation of an <u>intersectional, justice-centered, sustainable society.</u> 
        <br /><br />
        <a href='https://www.csf.uw.edu'>
          &#128073; Learn more about CSF
        </a>
      </div>
    },
    { id: 3, image: sticker3, story: 
      <div className='overlay-text'>
        As the current president of the Extended Reality Association at the University of Washington, I am building a hub where every student can easily access both hardware equipment and soft technical skills. We are incubating the next generation of open-source sptial-computing ideas and products that don't stem from profits but from social good.
        <br /><br />
        <a href='https://discord.gg/fF6vaSE'>
          &#128073; Join our discord
        </a>
        <br />
        <a href='https://www.instagram.com/uw_xra'>
          &#128073; Follow us on instagram
        </a>
      </div>
    },
    { id: 4, image: sticker4, story: 
      <div className='overlay-text'>
        I had the honor of working for the Associated Students of the University of Washington during the 2022-2023 academic year as a DevOps engineer in the Office of Communication. In this role, I replaced legacy technology stacks to achieve a student government that is truly transparent and accessible.
        <br /> <br />
        What's more? I bootstrapped an intergrated voting and tabulation software in a week~
      </div>
    },
    { id: 5, image: sticker5, story:
      <div className='overlay-text'>
        At the UW Reality Lab, in collboration with UW Medicine, I incorporated the use of Augmented Reality and Ultrasound imaging to develop a radiation-free Epidural Steroid Injection
        procedure, which traditionally requires long-time exposure to X-ray.
        <br /> <br />
        <a href='https://realitylab.uw.edu/components/incubator.html'>
          &#128073; Read more about my research
        </a>
      </div>
    },
    { id: 6, image: sticker6, story:
      <div className='overlay-text'>
        In the summer of 2023, I interned at a Seattle-based startup called Hugsi, and launched the Hugsi mobile app on IOS app store. I developed a full-stack system that uses Generative AI to suggest specific products to customers.
        <br /> <br />
        <a href='https://apps.apple.com/us/app/hugsi/id6451125365'>
          &#128073; Check out the Hugsi mobile app
        </a>
      </div>
    },
    { id: 7, image: sticker7, story:
      <div className='overlay-text'>
        In the summer of 2022, I worked at iD Tech and taught over 100 students (ages 7 to 17) about C# Programming, Game Development in Unity, JavaScript Programming, and other technical lessons for the first time in my life. It's definitely not going to be surprising if I end up becoming a teacher!
        <img src={image7} alt="drawing of id tech logo on a white board" />
      </div>
    },
  ];



  const handleStickerClick = (sticker) => {
    setSelectedSticker(sticker);
  };

  const handleCloseOverlay = () => {
    setSelectedSticker(null);
  };

  const handleOutsideClick = (event) => {
    if (overlayRef.current && !overlayRef.current.contains(event.target)) {
      handleCloseOverlay();
    }
  };

  useEffect(() => {
    if (selectedSticker) {
      document.addEventListener('mousedown', handleOutsideClick);
    } else {
      document.removeEventListener('mousedown', handleOutsideClick);
    }

    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
    };
  }, [selectedSticker]);

  return (
    <>
      <Navbar />
      <div className='header'>
        Things I am doing
      </div>
      <div className="stickers-container">
        {stickers.slice(0, 3).map((sticker) => (
          <div
            key={sticker.id}
            className="sticker-container"
            onClick={() => handleStickerClick(sticker)}
          >
            <img src={sticker.image} alt={`Sticker ${sticker.id}`} className="sticker" />
          </div>
        ))}
        {selectedSticker && (
          <div className="overlay">
            <div className="overlay-content" ref={overlayRef}>
              <span className="close-btn" onClick={handleCloseOverlay}>
                <i className='fa-solid fa-xmark' />
              </span>
              {selectedSticker.story}
            </div>
          </div>
        )}
      </div>

      <div className='header'>
        Things I did
      </div>
      <div className="stickers-container">
        {stickers.slice(3, 7).map((sticker) => (
          <div
            key={sticker.id}
            className="sticker-container"
            onClick={() => handleStickerClick(sticker)}
          >
            <img src={sticker.image} alt={`Sticker ${sticker.id}`} className="sticker" />
          </div>
        ))}
        {selectedSticker && (
          <div className="overlay">
            <div className="overlay-content" ref={overlayRef}>
              <span className="close-btn" onClick={handleCloseOverlay}>
                <i className='fa-solid fa-xmark' />
              </span>
              {selectedSticker.story}
            </div>
          </div>
        )}
      </div>
      <Footer />
    </>
  );
}

export default About;