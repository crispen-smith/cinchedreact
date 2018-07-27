/**
 *
 * CorsetThumbnailComponent
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const CTC = styled.div`
  border-radius: 3px;
  border: 1px solid rgba(0, 0, 0, 0.1);

  &:focus {
    background-color: rgba(0, 0, 0, 0.1);
    transform: scale(1.1) transformX(1.1);
    border: 1px solid rgba(0, 0, 0, 0.2);
  }

  text-align: center;
  flex-basis: 1;
  margin: 1rem;

  a {
    border: none;
    outline: none;

    &:focus {
      outline: none;
    }
  }
`;

function CorsetThumbnailComponent(props) {
  return (
    <CTC>
      <a href={`corsets/${props.CorsetName}`}>
        <span>{props.CorsetName}</span>
        <img alt={props.CorsetAlt} src={props.CorsetThumbnailSource} />
        <div className="summary">{props.Summary}</div>
      </a>
    </CTC>
  );
}

CorsetThumbnailComponent.propTypes = {
  CorsetName: PropTypes.string.isRequired,
  CorsetAlt: PropTypes.string.isRequired,
  CorsetThumbnailSource: PropTypes.string.isRequired,
  Summary: PropTypes.string.isRequired,
};

export default CorsetThumbnailComponent;
