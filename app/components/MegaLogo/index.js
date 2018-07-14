/**
 *
 * MegaLogo
 *
 */

import React from 'react';
import styled from 'styled-components';

const MegaLogoBase = styled.div`
  flex-basis: 13vw;
  flex-grow: 1;
  padding: 0;
  text-align: center;
  margin: 10px 0 0 10px;
  display: inline-block;
`;

const C = styled.span`
  font-family: 'Monsieur La Doulaise', cursive;
  font-size: 3rem;
  color: #191718;
`;

const T = C.extend`
  display: inline-block;
  transform: translateX(-40px) translateY(8px);
`;

function MegaLogo() {
  return (
    <MegaLogoBase>
      <C>C</C>
      <T>T</T>
    </MegaLogoBase>
  );
}

MegaLogo.propTypes = {};

export default MegaLogo;
