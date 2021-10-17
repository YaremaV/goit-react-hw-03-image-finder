import React from 'react';
import PropTypes from 'prop-types';
import './error.css';
import errorImage from '../errorImg/Error.jpg';

export default function Error({ message }) {
  return (
    <>
      <img className="picture" src={errorImage} alt="sadcat" />
      <p className="param">{message}</p>
    </>
  );
}

Error.propTypes = {
  message: PropTypes.string,
  children: PropTypes.element.isRequired,
};
