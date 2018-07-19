/**
 *
 * BrandBox
 *
 */

import React from 'react';
import styled from 'styled-components';
import MegaLogo from '../MegaLogo';

const BrandBoxBase = styled.div`
  padding: 0;
  margin: 0;
  flex: 1;
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
