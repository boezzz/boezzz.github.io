import React from 'react';
import '../../App.css';
import './Blogpage.css';

import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';


function Beatbounce() {
  return (
    <>
      <Navbar />

      <div className='title'>
        <h1>BeatBounce: bringing music production to 3D</h1>
        <h3>In collaboration with Jaclyn Chen, Eric Xiao, and Peyton Rapo</h3>
      </div>

        <article>
            <p>Developed in Unity, work with Quest 3 or any headset with OpenXR support.</p>
            <p>BeatBounce is a space where everyone can create music through a gamified experience. 
                In an immersive XR environment, players can launch balls using a cannon at various panels and design contraptions that allow the balls to bounce between panels. 
                Whenever a ball hits a panel, a musical note is produced. By adjusting the size and changing the materials of the panels, the sounds can vary in pitch and volume. 
                Through this game, we aim to make music production and education more accessible and intuitive while educating people about different physical phenomena.
            </p>

            <iframe src="https://www.youtube.com/embed/qHTbVx8nSdc?si=AS0ZOerWHQ7y-3mZ&amp;controls=0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            
            <a href='https://github.com/boezzz/BeatBounce'>
                Link to roject repo
            </a>
        </article>

      <Footer />
    </>
  );
}

export default Beatbounce;