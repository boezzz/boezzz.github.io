import React from 'react';
import './PublicationItem.css';

function PublicationItem({ publication }) {
  const { title, authors, venue, year, coverImage, links, abstract } = publication;

  // Format authors list, bolding "Boyang Zhou"
  const formatAuthors = (authorsList) => {
    return authorsList.map((author, index) => {
      const isBoe = author === 'Boyang Zhou';
      const separator = index < authorsList.length - 1 ? ', ' : '';

      return (
        <span key={index}>
          {isBoe ? <u>{author}</u> : author}
          {separator}
        </span>
      );
    });
  };

  // Check if cover is a video
  const isVideo = coverImage && (coverImage.endsWith('.mp4') || coverImage.endsWith('.webm'));

  return (
    <div className='publication-item'>
      <div className='publication-item__cover'>
        {isVideo ? (
          <video src={coverImage} autoPlay loop muted playsInline />
        ) : (
          <img src={coverImage} alt={`${title} cover`} />
        )}
      </div>

      <div className='publication-item__content'>
        <h3 className='publication-item__title'>{title}</h3>

        <p className='publication-item__authors'>
          {formatAuthors(authors)}
        </p>

        <p className='publication-item__venue'>
          <em>{venue} {year}</em>
        </p>

        {links && (
          <div className='publication-item__links'>
            {links.webpage && (
              <a href={links.webpage} target="_blank" rel="noopener noreferrer">
                [Webpage]
              </a>
            )}
            {links.arxiv && (
              <a href={links.arxiv} target="_blank" rel="noopener noreferrer">
                [arXiv]
              </a>
            )}
            {links.code && (
              <a href={links.code} target="_blank" rel="noopener noreferrer">
                [Code]
              </a>
            )}
            {links.pdf && (
              <a href={links.pdf} target="_blank" rel="noopener noreferrer">
                [PDF]
              </a>
            )}
            {links.demo && (
              <a href={links.demo} target="_blank" rel="noopener noreferrer">
                [Demo]
              </a>
            )}
            {links.poster && (
              <a href={links.poster} target="_blank" rel="noopener noreferrer">
                [Poster]
              </a>
            )}
            {links.dataset && (
              <a href={links.dataset} target="_blank" rel="noopener noreferrer">
                [Dataset]
              </a>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

export default PublicationItem;
