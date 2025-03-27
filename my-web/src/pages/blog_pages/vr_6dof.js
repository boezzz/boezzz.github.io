import React, { useEffect } from 'react';
import '../../App.css';
import './Blogpage.css';

import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

function VR6DOF() {
  useEffect(() => {
    document.title = "Online 6-DOF Viewer | Boe's Blog";
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Navbar />

      <div className='title'>
        <h1>Online 6-DOF Viewer</h1>
      </div>

      <article>
      <a href="https://boezzz.com/mono6D">
          Try out the demo! (full technical report included)
        </a>

      <p>6-DOF video, or 6 Degrees of Freedom video, is a media format that allows viewers to control both the position and orientation of the camera, enabling more immersive VR experiences. By leveraging 6-DOF head tracking data from modern VR headsets, users can explore pre-captured content with translational motion, introducing realistic motion parallax. </p>

<p>Compared to traditional 3-DOF 360-degree video, which is commonly seen on YouTube and other streaming platforms, 6-DOF video offers greater realism and interactivity, resulting in a significantly more immersive experience. This has strong implications for the next generation of media as we transition from 2D to 3D content.</p>

<p>Several approaches have been explored to generate 6-DOF video. One method involves capturing light fields using a custom-made camera array, encoding angular variations of light rays to reconstruct different viewpoints (Broxton et al., 2019). Another recent popular approach is 4D Gaussian Splatting, which, while capable of high-quality results, remains computationally intensive and requires input from multiple viewpoints. </p>

<p>I set out to address two key challenges seen in previous 6-DOF video solutions:  
1. Ease of Capture – using only a single commercial device (i.e., a handheld 360° camera).  
2. Accessibility – making the 6-DOF experience available in a widely distributable format.</p>  

<p>To tackle these problems, I developed mono6D, an online 6-DOF viewer that takes any 360-degree video captured from a single viewpoint as input and generates a distributable 6-DOF video with motion parallax. mono6D is largely built upon the research led by Ana Serrano in the paper <i>"Motion Parallax for 360° RGBD Video"</i>, which proposes separating monoscopic 360° video into three distinct layers based on depth and disocclusion across frames, with each layer rendered separately during playback (Serrano et al., 2019). Although this method does not achieve high-fidelity, state-of-the-art results and does not incorporate deep learning into its pipeline, it is relatively lightweight and computationally feasible to implement.</p>  

        <a href="https://boezzz.com/mono6D">
          Try out the demo! (full technical report included)
        </a>
      </article>

      <Footer />
    </>
  );
}

export default VR6DOF; 