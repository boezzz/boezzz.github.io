import React from 'react';
import './Publications.css';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import PublicationItem from '../components/PublicationItem';
import publicationsData from '../data/publications';

function Publications() {
  return (
    <>
      <Navbar />
      <div className='publications-container'>
        <div className='publications-header'>
          <h1>Publications</h1>
        </div>

        <div className='publications-list'>
          {publicationsData.map((publication) => (
            <PublicationItem
              key={publication.id}
              publication={publication}
            />
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Publications;
