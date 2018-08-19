/**
 *
 * NotFoundComponent
 *
 */

import React from 'react';
// import PropTypes from 'prop-types';
import styled from 'styled-components';

const NFC = styled.div`
  margin: 1rem;
  text-align: center;
  font-size: 2rem;
`;

/* eslint-disable react/prefer-stateless-function */
class NotFoundComponent extends React.PureComponent {
  render() {
    return (
      <NFC>
        Looks like the page you were looking for celebrated a litle too hard and
        has disapeared.
      </NFC>
    );
  }
}

NotFoundComponent.propTypes = {};

export default NotFoundComponent;
