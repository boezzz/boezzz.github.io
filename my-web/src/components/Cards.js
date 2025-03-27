import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards'>
      <div className='cards__header'>
        <h1>Boe's Blogs</h1>
        <p>A collection of my thoughts, projects, and experiences at the intersection of technology, sustainability, and human experience.</p>
      </div>
      
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='asset/images/forest_first_frame.jpg'
              text='Online Immersive Content Viewer'
              path='/vr-6dof'
              tag={['XR']}
              date='March 2025'
            />
            <CardItem
              src='asset/images/IMG_2531.jpg'
              text='Friday Harbor, 2024'
              path='/friday-harbor-2024'
              tag={['Travel', 'Sustainability']}
              date='October 2024'
            />
            <CardItem
              src='asset/images/IMG_2642.jpg'
              text='A preliminary exploration of XR cooking'
              path='/xr-cooking-capstone'
              tag={['XR']}
              date='June 2024'
            />
            <CardItem
              src='asset/images/unspoken.png'
              text='Using XR to learn American Sign Language: challenges and opportunities'
              path='/unspoken'
              tag={['XR', 'Accessibility']}
              date='March 2024'
            />
            <CardItem
              src='asset/images/beatbounce.png'
              text='BeatBounce: bringing music production to 3D'
              path='/beatbounce'
              tag={['XR']}
              date='May 2023'
            />
            <CardItem
              src='asset/images/tothepast.jpg'
              text='Teaching history through conversation'
              path='/forward-to-past'
              tag={['AI', 'Education']}
              date='February 2023'
            />
            <CardItem
              src='asset/images/spine.png'
              text='AR for Epidural Steroid Injection'
              path='/ar-esi'
              tag={['XR', 'Health']}
              date='December 2022'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;