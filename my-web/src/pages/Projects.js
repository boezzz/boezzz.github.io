import React from 'react';
import './Projects.css';
import '../components/Cards.css';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import CardItem from '../components/CardItem';
import projectsData from '../data/projects';

function Projects() {
  return (
    <>
      <Navbar />
      <div className='projects-container'>
        <div className='cards__header'>
          <h1>Projects</h1>
        </div>

        <div className='cards__container'>
          <div className='cards__wrapper'>
            <ul className='cards__items'>
              {projectsData.map((item) => (
                <CardItem
                  key={item.id}
                  src={item.src}
                  title={item.title}
                  path={item.path}
                  tag={item.tag}
                  date={item.date}
                />
              ))}
            </ul>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Projects;
