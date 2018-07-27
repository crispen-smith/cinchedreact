/**
 *
 * FormComponent
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const FC = styled.form`
  border-radius: 10px;
  background-color: rgba(255, 255, 255, 0.1);
  font-size: 1.25rem;

  .form-row-primary {
    padding: 1rem;
    border-bottom: 1px solid rgba(0, 0, 0, 0.1);
    text-align: center;
  }
`;

/* eslint-disable react/prefer-stateless-function */
class FormComponent extends React.PureComponent {
  render() {
    return <FC onSubmit={this.props.onSubmit}>{this.props.children}</FC>;
  }
}

FormComponent.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node),
  ]).isRequired,
};

export default FormComponent;
