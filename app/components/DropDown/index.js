/**
 *
 * DropDown
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
// import styled from 'styled-components';

/* eslint-disable react/prefer-stateless-function */
class DropDown extends React.PureComponent {
  render() {
    const options = this.props.options.map(option => (
      <option key={option} value={option}>
        {option}
      </option>
    ));

    return (
      <div className="form-row-primary">
        <label htmlFor={this.props.inputName}>
          {this.props.inputLabel}
          <select id={this.props.inputName} onChange={this.props.onChange}>
            {options}
          </select>
        </label>
      </div>
    );
  }
}

DropDown.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  inputLabel: PropTypes.string.isRequired,
  inputName: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default DropDown;
