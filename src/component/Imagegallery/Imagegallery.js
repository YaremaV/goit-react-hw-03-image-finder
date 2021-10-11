import React, { Component } from 'react';
import './imagegallery.css';
import ImageGalleryItem from '../ImageGalleryItem/Imagegalleryitem';

export default class ImageGallery extends Component {
  render() {
    return (
      <ul className="ImageGallery">
        <ImageGalleryItem imageName={this.props.imageName} />
      </ul>
    );
  }
}
