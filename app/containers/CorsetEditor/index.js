/**
 *
 * CorsetEditor
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
import makeSelectCorsetEditor from './selectors';
import reducer from './reducer';
import saga from './saga';

/* eslint-disable react/prefer-stateless-function */
export class CorsetEditor extends React.Component {
  render() {
    return (
      <div>
        <Helmet>
          <title>CorsetEditor</title>
          <meta name="description" content="Description of CorsetEditor" />
        </Helmet>
      </div>
    );
  }
}

CorsetEditor.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  corseteditor: makeSelectCorsetEditor(),
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

const withReducer = injectReducer({ key: 'corsetEditor', reducer });
const withSaga = injectSaga({ key: 'corsetEditor', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(CorsetEditor);
