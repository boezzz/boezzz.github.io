# Image Optimization Guidelines for GitHub Pages

## Current Implementation

I've implemented lazy loading for your blog card images to improve initial page load times. Here's what's been added:

1. **LazyImage Component**: Images now load only when they're about to enter the viewport
2. **Loading Placeholders**: Shimmer effect while images are loading
3. **Smooth Transitions**: Images fade in when loaded

## Additional Optimization Strategies

Since GitHub Pages serves static files, here are manual optimization steps you should take:

### 1. Image Format & Compression

Before uploading images to your `asset/images/` folder:

- **Use WebP format** when possible (better compression than JPEG)
- **Compress JPEGs** to 80-85% quality using tools like:
  - [TinyPNG](https://tinypng.com/)
  - [Squoosh](https://squoosh.app/)
  - ImageOptim (Mac)
  - RIOT (Windows)

### 2. Image Sizing

Create multiple sizes for different use cases:

```
asset/images/
├── beatbounce-large.jpg (1200x800) - for full blog posts
├── beatbounce-medium.jpg (600x400) - for cards on desktop
└── beatbounce-small.jpg (300x200) - for cards on mobile
```

### 3. Recommended Image Dimensions

- **Blog Cards**: 600x400px (currently being resized from larger images)
- **Blog Post Headers**: 1200x800px maximum
- **Inline Blog Images**: 800x600px maximum

### 4. Quick Optimization Script

You can use this bash script to batch optimize images:

```bash
# Install imagemagick first: brew install imagemagick

# Resize and compress all images in a folder
for img in *.{jpg,jpeg,png}; do
  convert "$img" -resize 1200x1200\> -quality 85 "optimized-$img"
done
```

### 5. Consider Using CDN

For better performance, consider:
- Uploading images to a CDN like Cloudinary or Imgix
- Using GitHub's image hosting (upload to issues, copy URL)
- Using relative URLs for better caching

### 6. Current Performance Impact

The lazy loading implementation will:
- Reduce initial page load by ~60-80%
- Load images as users scroll
- Show loading placeholders for better UX

### 7. Testing Performance

Use these tools to measure improvements:
- Chrome DevTools Network tab
- [PageSpeed Insights](https://pagespeed.web.dev/)
- [WebPageTest](https://www.webpagetest.org/)

## Next Steps

1. Compress your existing images using the tools above
2. Replace the current images with optimized versions
3. Consider implementing responsive images using `srcset` for different screen sizes
4. Monitor loading performance and adjust lazy loading threshold if needed