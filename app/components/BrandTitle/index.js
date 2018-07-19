/**
 *
 * BrandTitle
 *
 */

import React from 'react';
// import PropTypes from 'prop-types';
import styled from 'styled-components';

const BT = styled.div`
  flex: 8;
  padding-top: 1.5rem;
  padding-bottom: 0;
  margin: 0;
  line-height: 1.5;
`;

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
    <BT>
      <BrandTitleBase>Cinched Tight</BrandTitleBase>
      <BrandMessage>Celebrate Your Shape</BrandMessage>
    </BT>
  );
}

BrandTitle.propTypes = {};

export default BrandTitle;
