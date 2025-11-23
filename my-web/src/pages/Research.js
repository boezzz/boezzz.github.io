import React from 'react';
import './Research.css';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import PublicationItem from '../components/PublicationItem';
import researchData from '../data/research';

function Research() {
  return (
    <>
      <Navbar />
      <div className='research-container'>
        <div className='research-header'>
          <h1>Research</h1>
        </div>

        <div className='research-list'>
          {researchData.map((research) => (
            <PublicationItem
              key={research.id}
              publication={{
                ...research,
                authors: research.subtitle ? research.subtitle.split(', ') : [],
                year: research.date,
                coverImage: research.src
              }}
            />
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Research;
