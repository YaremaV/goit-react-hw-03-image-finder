import React from 'react';
import './imagegallaryitem.css';

const ImageGalleryItem = ({ hits }) => (
  <>
    {hits?.map(({ id, tag, webformatURL, largeImageURL }) => (
      <li key={id} className="ImageGalleryItem">
        <img src={webformatURL} alt={tag} className="ImageGalleryItem-image" />
      </li>
    ))}
  </>
);

export default ImageGalleryItem;
