import React from 'react';
import './Research.css';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import PublicationItem from '../components/PublicationItem';
import publicationsData from '../data/publications';
import researchData from '../data/research';

function Research() {
  return (
    <>
      <Navbar />
      <div className='research-container'>
        <div className='research-header'>
          <h1>Research</h1>
        </div>

        {/* Peer-reviewed Publications */}
        <div className='research-section'>
          <h2 className='research-section__title'>Publications</h2>
          <div className='research-list'>
            {publicationsData.map((publication) => (
              <PublicationItem
                key={publication.id}
                publication={publication}
              />
            ))}
            <p style={{ color: 'var(--text-color-secondary)', fontStyle: 'italic', marginTop: '20px' }}>More under review</p>
          </div>
        </div>

        {/* Preprints & Projects */}
        <div className='research-section'>
          <h2 className='research-section__title'>Preprints & Posters</h2>
          <div className='research-list'>
            {researchData.map((research) => (
              <PublicationItem
                key={research.id}
                publication={{
                  ...research,
                  authors: research.subtitle ? research.subtitle.split(', ') : [],
                  collaborator: research.collaborator,
                  year: research.date,
                  coverImage: research.src
                }}
              />
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Research;
