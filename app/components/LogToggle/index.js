/**
 *
 * LogToggle
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const LT = styled.a`
  flex: 1;
`;

function LogToggle(props) {
  const val = props.loggedIn ? 'LOGGED IN' : 'NOT LOGGED IN';
  return <LT onClick={props.onClick}>{val}</LT>;
}

LogToggle.propTypes = {
  loggedIn: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default LogToggle;
