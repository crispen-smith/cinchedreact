/**
 *
 * CorsetContainer
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
import makeSelectCorsetContainer from './selectors';
import reducer from './reducer';
import saga from './saga';

/* eslint-disable react/prefer-stateless-function */
export class CorsetContainer extends React.PureComponent {
  render() {
    return (
      <div>
        <Helmet>
          <title>CorsetContainer</title>
          <meta name="description" content="Description of CorsetContainer" />
        </Helmet>
      </div>
    );
  }
}

CorsetContainer.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  corsetcontainer: makeSelectCorsetContainer(),
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

const withReducer = injectReducer({ key: 'corsetContainer', reducer });
const withSaga = injectSaga({ key: 'corsetContainer', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(CorsetContainer);
