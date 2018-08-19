/**
 *
 * NotFoundComponent
 *
 */

import React from 'react';
// import PropTypes from 'prop-types';
import Not from '../Not';

/* eslint-disable react/prefer-stateless-function */
class NotFoundComponent extends React.PureComponent {
  render() {
    return (
      <Not>
        Looks like the page you were looking for celebrated a litle too hard and
        has disapeared.
      </Not>
    );
  }
}

NotFoundComponent.propTypes = {};

export default NotFoundComponent;
