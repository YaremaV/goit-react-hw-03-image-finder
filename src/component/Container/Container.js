import React from 'react';
import PropTypes from 'prop-types';
import './Container.css';

const Container = ({ children }) => <div className="Container">{children}</div>;

export default Container;

Container.propTypes = {
  children: PropTypes.element.isRequired,
};
