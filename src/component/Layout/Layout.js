import React from 'react';
import PropTypes from 'prop-types';
import Container from '../Container/Container';

const Layout = ({ children }) => (
  <>
    <Container>{children}</Container>
  </>
);

export default Layout;

Layout.propTypes = {
  children: PropTypes.element.isRequired,
};
