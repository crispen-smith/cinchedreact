/**
 *
 * ProductTitle
 *
 */

import React from 'react';
import propTypes from 'prop-types';
import styled from 'styled-components';

const PT = styled.h1`
  margin: 1rem 0.5rem 0 0.5rem;
  padding: 0;
  text-align: center;
  font-size: 3rem;
  font-family: 'Monsieur La Doulaise', cursive;
`;

const ProductTitle = props => <PT>{props.children}</PT>;

ProductTitle.propTypes = {
  children: propTypes.oneOfType([
    propTypes.arrayOf(propTypes.element),
    propTypes.element,
    propTypes.string,
    propTypes.node,
  ]),
};

export default ProductTitle;
