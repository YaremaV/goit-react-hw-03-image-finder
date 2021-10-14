import React, { Component } from 'react';
import { ToastContainer } from 'react-toastify';
import Searchbar from './component/Searchbar/Searchbar';
import ImageGallery from './component/Imagegallery/Imagegallery';

import Layout from './component/Layout/Layout';

export default class App extends Component {
  state = {
    image: '',
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

  render() {
    return (
      <Layout>
        <Searchbar onSubmit={this.handleFormSubmit} />
        <ImageGallery imageName={this.state.image} onClick={this.toggleModal} />
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
      </Layout>
    );
  }
}
