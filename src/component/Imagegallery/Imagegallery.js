import React, { Component } from 'react';
import './imagegallery.css';
import PhotoApiServer from '../api-server/api-server';
import ImageGalleryItem from '../ImageGalleryItem/Imagegalleryitem';
import Button from '../Button/Button';
import InputMessage from '../InputMessage/InputMesage';
import Error from '../Error/Error';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';

import Loader from 'react-loader-spinner';

const photoApiServer = new PhotoApiServer();

export default class ImageGallery extends Component {
  state = {
    images: [],
    error: null,
    status: 'idle',
  };

  componentDidUpdate(prevProps, prevState) {
    const prevName = prevProps.imageName;
    const currentName = this.props.imageName;

    if (prevName !== currentName) {
      this.setState({ status: 'pending' });
      photoApiServer.resetPage();
      photoApiServer.query = currentName;
      this.updateImages(currentName);
    }
  }

  updateImages() {
    photoApiServer
      .fetchImages()
      .then(result => {
        if (result.hits.length > 0) {
          this.updateImagesArray(result.hits);
          photoApiServer.incrementPage();
          this.scrollView();
          return;
        }
        throw new Error(`Sorry, but not found images ${this.props.imageName}`);
      })
      .catch(error => this.setState({ error, status: 'rejected' }));
  }

  updateImagesArray = update => {
    if (photoApiServer.page === 1) {
      this.setState({ images: update, status: 'resolved' });
      return;
    }
    this.setState(prev => {
      return { images: [...prev.images, ...update], status: 'resolved' };
    });
  };

  scrollView = () => {
    if (this.state.images.length > 12) {
      window.scrollTo({
        top: document.documentElement.scrollHeight,
        behavior: 'smooth',
      });
    }
    return;
  };

  addImage = () => {
    this.setState({ status: 'pending' });
    this.updateImages('cat');
  };

  // idle;
  // pending;
  // resolved;
  // rejected;

  render() {
    const { images, error, status } = this.state;

    if (status === 'idle') {
      return <InputMessage />;
    }

    if (status === 'pending') {
      return (
        <Loader
          type="ThreeDots"
          color="#00BFFF"
          height={300}
          width={300}
          timeout={3000}
        />
      );
    }
    if (status === 'rejected') {
      return <Error message={error.message} />;
    }

    if (status === 'resolved') {
      return (
        <>
          <ul className="ImageGallery" onClick={this.props.onClick}>
            {images.map(image => {
              return (
                <ImageGalleryItem
                  key={image.id}
                  src={image.webformatURL}
                  bigImg={image.largeImageURL}
                  descr={image.tag}
                  imageName={this.props.imageName}
                />
              );
            })}
          </ul>

          <Button onClick={this.addImage} />
        </>
      );
    }
  }
}
