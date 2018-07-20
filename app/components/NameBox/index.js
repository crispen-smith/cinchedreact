/**
 *
 * NameBox
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
// import styled from 'styled-components';

/* eslint-disable react/prefer-stateless-function */
class NameBox extends React.Component {
  render() {
    return (
      <div className="form-row-primary">
        <label htmlFor={this.props.inputName}>
          {this.props.inputLabel}
          <input
            type="text"
            id={this.props.inputName}
            onChange={this.props.onChange}
          />
        </label>
      </div>
    );
  }
}

NameBox.propTypes = {
  inputName: PropTypes.string.isRequired,
  inputLabel: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default NameBox;
