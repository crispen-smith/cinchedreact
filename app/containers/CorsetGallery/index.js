/**
 *
 * CorsetGallery
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
import makeSelectCorsetGallery from './selectors';
import reducer from './reducer';
import saga from './saga';

/* eslint-disable react/prefer-stateless-function */
export class CorsetGallery extends React.Component {
  render() {
    return (
      <div>
        <Helmet>
          <title>CorsetGallery</title>
          <meta name="description" content="Description of CorsetGallery" />
        </Helmet>
      </div>
    );
  }
}

CorsetGallery.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  corsetgallery: makeSelectCorsetGallery(),
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
const withSaga = injectSaga({ key: 'corsetGallery', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(CorsetGallery);
