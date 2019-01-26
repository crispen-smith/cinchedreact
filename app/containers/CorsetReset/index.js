/*
/
/ Corset Reset - when the gallery is all F'ed up just reset it.
/ Break *ONLY* in case of emergency
/
*/

// Import a whole bunch of stuff we don't need,
// TODO: TRIM THIS LIST!

import React from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';

import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';

import injectReducer from 'utils/injectReducer';

import { makeSelectLoggedIn } from '../BrandedHeader/selectors';
import { makeSelectCorsetGallery } from '../CorsetGallery/selectors';

import reducer from './reducer';

import * as actions from './actions';

/* eslint-disable react/prefer-stateless-function */
class CorsetReset extends React.Component {
  constructor(props) {
    super(props);
    if (!this.props.loggedIn) return;
    const { dispatch } = this.props;
    const resetAction = actions.resetAction();
    dispatch(resetAction);
  }

  render() {
    return <div>CORSET RESET</div>;
  }
}

CorsetReset.propTypes = {
  loggedIn: PropTypes.bool.isRequired,
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  corsetGallery: makeSelectCorsetGallery(),
  loggedIn: makeSelectLoggedIn(),
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

const withReducer = injectReducer({ key: 'corsetGallery', reducer });

export default compose(
  withReducer,
  withConnect,
)(CorsetReset);
