import React, { Component } from 'react';
import { ToastContainer } from 'react-toastify';
import Searchbar from './component/Searchbar/Searchbar';
import ImageGallery from './component/Imagegallery/Imagegallery';
import Button from './component/Button/Button.js';
import Modal from './component/Modal/Modal';

export default class App extends Component {
  state = {
    image: '',
    showModal: false,
  };

  componentDidMount() {
    console.log('App componentDidMount');
  }

  componentDidUpdate(prevProps, prevState) {
    console.log('App componentDidUpdate');
  }

  handleFormSubmit = image => {
    this.setState({ image });
  };

  toggleModal = () => {
    this.setState(({ showModal }) => ({
      showModal: !showModal,
    }));
  };

  render() {
    return (
      <>
        <Searchbar onSubmit={this.handleFormSubmit} />;
        <ImageGallery imageName={this.state.image} />;
        <Button />
        <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />
        {/* {this.state.showModal && <Modal onclick={this.toggleModal}></Modal>} */}
      </>
    );
  }
}
