/**
 *
 * BrandTitle
 *
 */

import React from 'react';
// import PropTypes from 'prop-types';
import styled from 'styled-components';

const BrandTitleBase = styled.h1`
  margin: 0;
  font-family: 'Monsieur La Doulaise', cursive;
  font-size: 2.5rem;
`;

const BrandMessage = styled.h2`
  transform: translateX(35px) translateY(-20px);
  font-family: 'Lora', serif;
  font-size: 0.5rem;
  margin: 0;
  padding: 0;
`;

function BrandTitle() {
  return (
    <div>
      <BrandTitleBase>Cinched Tight</BrandTitleBase>
      <BrandMessage>Celebrate Your Shape</BrandMessage>
    </div>
  );
}

BrandTitle.propTypes = {};

export default BrandTitle;
