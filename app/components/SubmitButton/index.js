/**
 *
 * SubmitButton
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import colors from '../../resources/colors';

const SB = styled.input`
  font-size: 2rem;
  margin: 1rem auto;
  border-radius: 25%;
  background-color: ${colors.pink};
`;

function SubmitButton(props) {
  return <SB type="submit" value={props.label} />;
}

SubmitButton.propTypes = {
  label: PropTypes.string.isRequired,
};

export default SubmitButton;
