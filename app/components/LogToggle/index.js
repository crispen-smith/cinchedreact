/**
 *
 * LogToggle
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import colors from '../../resources/colors';

const LT = styled.a`
  flex: 1;
  font-size: 0.25rem;
  vertical-align: bottom;
  text-align: right;
  padding-right: 1rem;
  color: ${colors.blue};
  cursor: pointer;
  margin-bottom: 0;
  padding-bottom: 0;
  padding-top: 4.5rem;
`;

function LogToggle(props) {
  const val = props.loggedIn ? 'Log Out' : 'Log In';
  return <LT onClick={props.onClick}>{val}</LT>;
}

LogToggle.propTypes = {
  loggedIn: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default LogToggle;
