/**
 *
 * BrandBox
 *
 */

import React from 'react';
import styled from 'styled-components';
import MegaLogo from '../MegaLogo';

const BrandBoxBase = styled.div`
  width: 80%;
  padding: 0;
  margin: 0;
  flex: 4;
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
