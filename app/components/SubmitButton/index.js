/**
 *
 * SubmitButton
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import colors from '../../resources/colors';

const SB = styled.input.attrs({
  'data-cursor': props => props['data-cursor'] || 'not-allowed',
})`
  font-size: 2rem;
  margin: 1rem auto;
  border-radius: 25%;
  background-color: ${colors.pink};
  cursor: ${props => props['data-cursor']};
`;

function SubmitButton(props) {
  return (
    <SB
      type="submit"
      value={props.label}
      disabled={!props.enabled}
      onClick={props.onClick}
      data-cursor={props.dataCursor}
    />
  );
}

SubmitButton.propTypes = {
  label: PropTypes.string.isRequired,
  enabled: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired,
  dataCursor: PropTypes.string.isRequired,
};

export default SubmitButton;
