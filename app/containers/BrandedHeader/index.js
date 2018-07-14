/**
 *
 * BrandedHeader
 *
 */

import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';

import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';

import { makeSelectLoggedIn } from './selectors';
import reducer from './reducer';
import saga from './saga';
import BrandBox from '../../components/BrandBox';
import LogToggle from '../../components/LogToggle';

import * as brandActions from './actions';
import { colors } from '../../resources/colors';

const BH = styled.div`
  display: flex;
  background-color: ${colors.pink};
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  box-shadow: 1px 1px 1px 0px rgba(0, 0, 0, 0.1);
`;

class BrandedHeaderBase extends React.Component { // eslint-disable-line
  render() {
    const dispatch = { ...this.props };
    let action;
    if (this.props.loggedIn) {
      action = brandActions.logout();
    } else {
      action = brandActions.login();
    }

    const loggingSwitch = () => dispatch(action);
    return (
      <BH>
        <BrandBox />
        <LogToggle loggedIn={this.props.loggedIn} onClick={loggingSwitch} />
      </BH>
    );
  }
}

BrandedHeaderBase.propTypes = {
  loggedIn: PropTypes.bool.isRequired,
};

const mapStateToProps = createStructuredSelector({
  loggedIn: makeSelectLoggedIn(),
});

export function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

const withReducer = injectReducer({ key: 'brand', reducer });
const withSaga = injectSaga({ key: 'brand', saga });

const BrandedHeader = compose(
  withReducer,
  withSaga,
  withConnect,
)(BrandedHeaderBase);

export default BrandedHeader;
