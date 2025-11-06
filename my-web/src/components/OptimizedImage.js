import React, { useState } from 'react';
import LazyImage from './LazyImage';

function OptimizedImage({ src, alt, className, style }) {
  const [hasError, setHasError] = useState(false);

  // Generate optimized src based on screen size
  const getOptimizedSrc = () => {
    // For GitHub Pages, we can't dynamically resize images server-side
    // But we can use different pre-sized images if available
    if (typeof window !== 'undefined') {
      const width = window.innerWidth;
      
      // If you have pre-sized images, you can use logic like this:
      // if (width < 768 && src.includes('large')) {
      //   return src.replace('large', 'small');
      // }
    }
    return src;
  };

  const handleError = () => {
    setHasError(true);
  };

  if (hasError) {
    return (
      <div 
        className={`${className} image-error`} 
        style={{
          ...style,
          backgroundColor: 'var(--background-color-light, #f0f0f0)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: 'var(--text-color-secondary, #666)'
        }}
      >
        <span>Image failed to load</span>
      </div>
    );
  }

  return (
    <LazyImage
      src={getOptimizedSrc()}
      alt={alt}
      className={className}
      style={style}
      onError={handleError}
    />
  );
}

export default OptimizedImage;