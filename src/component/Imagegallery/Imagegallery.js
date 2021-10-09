import React from 'react';
import './imagegallery.css';
import ImageGalleryItem from '../ImageGalleryItem/Imagegalleryitem';

export default function ImageGallery() {
  return (
    <ul className="ImageGallery">
      <ImageGalleryItem />
    </ul>
  );
}
