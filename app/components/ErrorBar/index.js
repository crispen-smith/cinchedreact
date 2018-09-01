/**
 *
 * ErrorBar
 *
 */

import React from 'react';
import PropTypes from 'prop-types';

import styled from 'styled-components';
import colors from '../../resources/colors';

const EB = styled.div`
  width: auto;
  margin: 0.5rem 1rem;
  background-color: ${colors.bg_red};
  color: ${colors.fg_red};
  text-decoration: underline;
`;

const ErrorBar = props => <EB>{props.message}</EB>;

ErrorBar.propTypes = {
  message: PropTypes.string.isRequired,
};
export default ErrorBar;
