import React, { Component } from 'react';
import s from './searchbar.module.css';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default class Searchbar extends Component {
  state = {
    image: '',
  };

  handleImageChange = EventTarget => {
    this.setState({ image: EventTarget.currentTarget.value.toLowerCase() });
  };

  handleSubmit = evt => {
    evt.preventDefault();
    if (this.state.image.trim() === '') {
      toast.error('Введите название изображения!', {
        position: 'top-left',
        theme: 'colored',
      });
      return;
    }

    this.props.onSubmit(this.state.image);

    this.setState({ image: '' });
  };

  render() {
    return (
      <header className={s.Searchbar}>
        <form className={s.SearchForm} onSubmit={this.handleSubmit}>
          <button type="submit" className={s.SearchFormButton}>
            <span className={s.SearchFormButtonLabel}>Search</span>
          </button>

          <input
            className={s.SearchFormInput}
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            value={this.state.image}
            onChange={this.handleImageChange}
          />
        </form>
      </header>
    );
  }
}
