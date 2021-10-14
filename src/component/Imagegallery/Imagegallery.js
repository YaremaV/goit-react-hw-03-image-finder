import React, { Component } from 'react';
import './imagegallery.css';
import PhotoApiServer from '../api-server/api-server';
import ImageGalleryItem from '../ImageGalleryItem/Imagegalleryitem';
import Button from '../Button/Button';
import Modal from '../Modal/Modal';

const photoApiServer = new PhotoApiServer();

export default class ImageGallery extends Component {
  state = {
    images: [],
    showModal: false,
    loading: false,
    error: null,
  };

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.imageName !== this.props.imageName) {
      this.setState({ loading: true });
      console.log('prevProps.imageName', prevProps.imageName);
      console.log('props.imageName', this.props.imageName);

      photoApiServer.query = this.props.imageName;
      photoApiServer
        .fetchImages()
        .then(images => this.setState({ images, loading: false }))
        .catch(error => this.setState({ error }))
        .finally(() => this.setState({ loading: false }));
    }
  }

  toggleModal = () => {
    console.log('click');
    this.setState(({ showModal }) => ({
      showModal: !showModal,
    }));
  };

  addImage() {
    console.log('click');
    photoApiServer.fetchImages();
  }

  render() {
    return (
      <>
        <ul className="ImageGallery" onClick={this.props.onClick}>
          {this.state.images && (
            <ImageGalleryItem
              hits={this.state.images}
              imageName={this.props.imageName}
            />
          )}
        </ul>
        {this.props.imageName && <Button onClick={this.addImage} />}
        {this.state.showModal && <Modal onClick={this.toggleModal} />}
      </>
    );
  }
}
