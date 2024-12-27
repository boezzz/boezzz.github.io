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
              text='BeatBounce: bringing music production to 3D'
              path='/beatbounce'
            />
            <CardItem
              src='asset/images/tothepast.jpg'
              text='Teaching history through conversation'
              path='/forward-to-past'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='asset/images/IMG_2642.jpg'
              text='A priliminary exploration of XR cooking'
              path='/xr-cooking-capstone'
            />
            <CardItem
              src='asset/images/unspoken.png'
              text='Using XR to learn American Sign Language: challenges and opportunties'
              path='/unspoken'
            />
            <CardItem
              src='asset/images/IMG_2531.jpg'
              text='Friday Harbor, 2024'
              path='/friday-harbor-2024'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;