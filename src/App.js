import React, { Component } from 'react';

import Searchbar from './component/Searchbar/Searchbar';
import ImageGallery from './component/Imagegallery/Imagegallery';
import Button from './component/Button/Button.js';

export default class App extends Component {
  state = {};

  componentDidMount() {
    console.log('App componentDidMount');
  }

  componentDidUpdate(prevProps, prevState) {
    console.log('App componentDidUpdate');
  }

  render() {
    return (
      <>
        <Searchbar />;
        <ImageGallery />;
        <Button />
      </>
    );
  }
}
