/**
 *
 * CorsetCreator
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
// import { Helmet } from 'react-helmet';
import { createStructuredSelector } from 'reselect';

import { compose } from 'redux';

import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';
// import {
//   makeSelectCorsetGallery,
//   makeSelectCurrentCorset,
//   makeSelectorFilteredCorsets,
// } from '../CorsetGallery/selectors';
import { makeSelectLoggedIn } from '../BrandedHeader/selectors';
import reducer from './reducer';
// import * as actions from './actions';
import saga from './saga';
import NotLoggedInComponent from '../../components/NotLoggedInComponent';
// import FormComponent from '../../components/FormComponent';
// import NameBox from '../../components/NameBox';
// import DropDown from '../../components/DropDown';
// import SubmitButton from '../../components/SubmitButton';

/* eslint-disable react/prefer-stateless-function */
export class CorsetEditor extends React.Component {
  render() {
    if (!this.props.loggedIn)
      return <NotLoggedInComponent title="Corset Editor" />;

    return <div>Placeholder</div>;
  }
}

CorsetEditor.propTypes = {
  loggedIn: PropTypes.bool.isRequired,
};

const mapStateToProps = createStructuredSelector({
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
const withSaga = injectSaga({ key: 'corsetGallery', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(CorsetEditor);
