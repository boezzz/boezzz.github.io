import React, { useState, useEffect, useRef } from 'react';
import './LazyImage.css';

function LazyImage({ src, alt, className, placeholderSrc }) {
  const [imageSrc, setImageSrc] = useState(placeholderSrc || '');
  const imageRef = useRef(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting) {
          setIsInView(true);
          setImageSrc(src);
        }
      },
      {
        threshold: 0.01,
        rootMargin: '50px',
      }
    );

    if (imageRef.current) {
      observer.observe(imageRef.current);
    }

    return () => {
      if (imageRef.current) {
        observer.unobserve(imageRef.current);
      }
    };
  }, [src]);

  return (
    <div className={`lazy-image-wrapper ${isLoaded ? 'loaded' : ''}`} ref={imageRef}>
      {isInView && (
        <img
          src={imageSrc}
          alt={alt}
          className={`${className} lazy-image`}
          onLoad={() => setIsLoaded(true)}
          onError={() => setIsLoaded(true)} // Handle error case
        />
      )}
      {!isLoaded && isInView && <div className="image-loader"></div>}
    </div>
  );
}

export default LazyImage;