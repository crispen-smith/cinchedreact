/**
 *
 * ProductGrid
 *
 */

import React from 'react';
import propTypes from 'prop-types';
import styled from 'styled-components';

const PG = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: flex-start;
  align-content: flex-start;
  margin: 1rem;
  z-index: 100;
`;

const ProductGrid = props => <PG>{props.children}</PG>;

ProductGrid.propTypes = {
  children: propTypes.oneOfType([
    propTypes.arrayOf(propTypes.element),
    propTypes.string,
    propTypes.element,
  ]),
};

export default ProductGrid;
