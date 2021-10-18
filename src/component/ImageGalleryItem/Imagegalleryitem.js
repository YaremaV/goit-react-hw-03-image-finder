import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './imagegallaryitem.css';
import Modal from '../Modal/Modal';

export default class ImageGalleryItem extends Component {
  state = {
    showModal: false,
  };

  toggleModal = () => {
    console.log('click');
    this.setState(({ showModal }) => ({
      showModal: !showModal,
    }));
  };

  render() {
    const { showModal } = this.state;
    return (
      <>
        <li className="ImageGalleryItem">
          <img
            src={this.props.src}
            alt={this.props.description}
            data-image={this.props.bigImg}
            onClick={this.toggleModal}
            className="ImageGalleryItem-image"
          />
        </li>

        {showModal && (
          <Modal onClose={this.toggleModal}>
            <img src={this.props.bigImg} alt={this.props.description} />
          </Modal>
        )}
      </>
    );
  }
}

ImageGalleryItem.propType = {
  src: PropTypes.string,
  alt: PropTypes.string,
  data: PropTypes.string,
  onClick: PropTypes.func,
};
