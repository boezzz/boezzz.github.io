import React from 'react';
import '../../App.css';
import './Blogpage.css';

import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';


function SoArm100() {
  return (
    <>
      <Navbar />

      <div className='title'>
        <h1>Play Around SO-ARM100: Droi-Link Real-Time Sensor Sharing</h1>
        <h3>May 2025</h3>
      </div>

        <article>
            <p>Ever wished you could just point at something and have a robot fetch it for you? Well, that's exactly what we built!</p>
            <img src='asset/images/user_demoing.jpg' alt='Droi-Link' />
            <p>Meet Droi-Link - our quirky take on human-robot collaboration that turns your Meta Quest 3 into a robot's best friend. 
                Picture this: you're wearing a headset, casually pointing at objects like a wizard casting spells, while our trusty SO-100 robot arm scrambles to follow your commands. 
                It's like having a robotic butler who actually understands your vague hand gestures (well, 17% of the time in our trials, but hey, we're getting there!).
            </p>
            <p>Here's the fun part - we're essentially giving robots a piggyback ride on human perception. 
                While you handle the "big picture" stuff (literally looking around and understanding the scene), the robot focuses on the nitty-gritty details of actually grabbing things without knocking over your coffee mug. 
                We use fancy ArUco markers (think QR codes but cooler) to help the robot nail those sub-centimeter movements.
            </p>
            <p>The magic happens through spatial raycasting - basically drawing invisible laser beams from your finger to tell the robot exactly where to go. 
                Your gaze sets up the coordinate system, and from there, it's all about translating your "grab that thing over there" into precise robotic movements. 
                It's like playing a real-life point-and-click adventure game!
            </p>
            <p>Why did we build this? Well, traditional robot sensors are either stuck to walls (boring!) or constantly watching everything (creepy!). 
                Our approach lets YOU decide when and what the robot sees, keeping your privacy intact while still getting help with everyday tasks. 
                Plus, who doesn't want to feel like they're living in the future?
            </p>
            <p>Big shoutout to my collaborators Yu-Jung Su and Shas Mani at the Paul G. Allen School - couldn't have done this without their brilliance and patience with my "what if we just..." ideas!</p>
        </article>

      <Footer />
    </>
  );
}

export default SoArm100;