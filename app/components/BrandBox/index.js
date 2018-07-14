/**
 *
 * BrandBox
 *
 */

import React from 'react';
import styled from 'styled-components';
import MegaLogo from '../MegaLogo';

const BrandBoxBase = styled.div`
  background-color: #fde0e0;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  padding: 1rem;
  box-shadow: 1px 1px 1px 0px rgba(0, 0, 0, 0.1);
`;

function BrandBox() {
  return (
    <BrandBoxBase>
      <MegaLogo />
    </BrandBoxBase>
  );
}

BrandBox.propTypes = {};

export default BrandBox;
