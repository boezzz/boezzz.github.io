import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function CardItem(props) {
  // Convert tags to array if it's a string or keep as array if already array
  const tags = Array.isArray(props.tag) ? props.tag : props.tag ? [props.tag] : [];
  const [isImageLoaded, setIsImageLoaded] = useState(false);
  
  return (
    <>
      <li className='cards__item'>
        <Link className='cards__item__link' to={props.path}>
          <figure className='cards__item__pic-wrap'>
            <div className='cards__item__tags'>
              {tags.map((tag, index) => (
                <span key={index} className='cards__item__tag'>{tag}</span>
              ))}
            </div>
            <img
              className='cards__item__img'
              alt={props.text}
              src={props.src}
              loading="lazy"
              onLoad={() => setIsImageLoaded(true)}
              style={{
                opacity: isImageLoaded ? 1 : 0,
                transition: 'opacity 0.3s ease-in-out'
              }}
            />
          </figure>
          <div className='cards__item__info'>
            <h5 className='cards__item__text'>{props.text}</h5>
            {props.date && <span className='cards__item__date'>{props.date}</span>}
          </div>
        </Link>
      </li>
    </>
  );
}

export default CardItem;