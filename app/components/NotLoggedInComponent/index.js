/**
 *
 * NotLoggedInComponent
 *
 */

import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import Not from '../Not';

/* eslint-disable react/prefer-stateless-function */
class NotLoggedInComponent extends React.PureComponent {
  render() {
    return (
      <Fragment>
        <h1>{this.props.title}</h1>
        <Not>You must be logged in to access this page.</Not>
      </Fragment>
    );
  }
}

NotLoggedInComponent.propTypes = {
  title: PropTypes.string.isRequired,
};

export default NotLoggedInComponent;
