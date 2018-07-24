/**
 *
 * Corset
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';
import makeSelectCorset from './selectors';
import reducer from './reducer';
import saga from './saga';

/* eslint-disable react/prefer-stateless-function */
export class Corset extends React.Component {
  render() {
    return (
      <div>
        <Helmet>
          <title>Corset</title>
          <meta name="description" content="Description of Corset" />
        </Helmet>
      </div>
    );
  }
}

Corset.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  corset: makeSelectCorset(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

const withReducer = injectReducer({ key: 'corset', reducer });
const withSaga = injectSaga({ key: 'corset', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(Corset);
