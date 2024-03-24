import React from 'react';
import '../../App.css';
import './Project.css';

import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';


function Beatbounce() {
  return (
    <>
      <Navbar />
        <article>
            <h1>BeatBounce</h1>
            <p>Developed in Unity, work with Quest 3 or any other XR headset with OpenXR support.</p>
            <p>BeatBounce is a space where everyone can create music through a gamified experience. 
                In an immersive XR environment, players can launch balls using a cannon at various panels and design contraptions that allow the balls to bounce between panels. 
                Whenever a ball hits a panel, a musical note is produced. By adjusting the size and changing the materials of the panels, the sounds can vary in pitch and volume. 
                Through this game, we aim to make music production and education more accessible and intuitive while educating people about different physical phenomena.
            </p>

            <iframe src="https://www.youtube.com/embed/qHTbVx8nSdc?si=AS0ZOerWHQ7y-3mZ&amp;controls=0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            
            <p>In collaboration with Jaclyn Chen, Eric Xiao, and Peyton Rapo</p>
            <a href='https://github.com/boezzz/BeatBounce'>
                &#128073; Check out the project repo
            </a>
        </article>
      <Footer />
    </>
  );
}

export default Beatbounce;