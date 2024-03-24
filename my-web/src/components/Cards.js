import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards'>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='asset/images/beatbounce.png'
              text='BeatBounce: bring music production to 3D'
              path='/p1'
            />
            <CardItem
              src='asset/images/tothepast.jpg'
              text='Forward to the past: AI track winner for Stanford XR Hackathon 2023'
              path='/p2'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='asset/images/cnact_logo.png'
              text='CNACT: benchmarking corporate climate disclosures using LLM'
              path='/p3'
            />
            <CardItem
              src='asset/images/unspoken.png'
              text='Unspoken: interactive way to learn American Sign Language'
              path='/p4'
            />
            <CardItem
              src='asset/images/flipper_logo.png'
              text='More projects coming'
              path='/p5'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;