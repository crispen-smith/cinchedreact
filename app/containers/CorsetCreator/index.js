/**
 *
 * CorsetCreator
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
import makeSelectCorsetCreator from './selectors';
import reducer from './reducer';
import saga from './saga';

/* eslint-disable react/prefer-stateless-function */
export class CorsetCreator extends React.Component {
  render() {
    return (
      <div>
        <Helmet>
          <title>CorsetCreator</title>
          <meta name="description" content="Description of CorsetCreator" />
        </Helmet>
      </div>
    );
  }
}

CorsetCreator.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  corsetcreator: makeSelectCorsetCreator(),
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

const withReducer = injectReducer({ key: 'corsetCreator', reducer });
const withSaga = injectSaga({ key: 'corsetCreator', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(CorsetCreator);
