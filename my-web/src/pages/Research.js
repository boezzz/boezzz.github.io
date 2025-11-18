import React from 'react';
import './Research.css';
import '../components/Cards.css';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import CardItem from '../components/CardItem';
import researchData from '../data/research';

function Research() {
  return (
    <>
      <Navbar />
      <div className='research-container'>
        <div className='cards__header'>
          <h1>Research</h1>
        </div>

        <div className='cards__container'>
          <div className='cards__wrapper'>
            <ul className='cards__items'>
              {researchData.map((item) => (
                <CardItem
                  key={item.id}
                  src={item.src}
                  text={item.text}
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

export default Research;
