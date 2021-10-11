import React, { Component } from 'react';
import './imagegallaryitem.css';

const BASE_URL = 'https://pixabay.com/api/';
const KEY = '22938064-7e67cff9dc13648fb3a6e967b';

export default class ImageGalleryItem extends Component {
  state = {
    images: [],
    page: 1,
  };

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.imageName !== this.props.imageName) {
      console.log('prevProps.imageName', prevProps.imageName);
      console.log('props.imageName', this.props.imageName);

      fetch(`${BASE_URL}?q=${this.props.imageName}&page=${this.state.page}&key=${KEY}&image_type=photo&orientation=horizontal&per_page=12
`)
        .then(response => response.json())
        .then(images => this.setState({ images }));
    }
  }

  render() {
    const { images } = this.state;
    const hits = images.hits;
    console.log(hits);
    return (
      <>
        {images &&
          hits?.map(hit => (
            <li key={hit.id} className="ImageGalleryItem">
              <img
                src={hit.userImageURL}
                alt={hit.tags}
                className="ImageGalleryItem-image"
              />
            </li>
          ))}
      </>
    );
  }
}
