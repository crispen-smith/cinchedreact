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
  transition: 0.5s;
  width: 20%;
  margin: 0.5rem 0.5%;
  flex: 0 1 auto;
  align-self: flex-start;
  border: 1px solid rgba(0, 0, 0, 0);

  &:hover {
    background-color: #ffffff;
    transform: scale(1.1) translateX(10px);
    border: 1px solid rgba(0, 0, 0, 0.1);
    border-radius: 10px;
  }

  text-align: center;
  flex: 0 1 auto;
  margin: 1rem;

  a {
    border: none;
    outline: none;
    cursor: pointer;
    text-decoration: none;

    &:focus {
      outline: none;
    }
  }

  img {
    display: block;
    width: 90%;
    margin: 0 auto;
    border-radius: 10px;
  }

  h2 {
    font-family: 'Monsieur La Doulaise', cursive;
    font-size: 2rem;
    padding: none;
    margin: none;
  }
`;

function CorsetThumbnailComponent(props) {
  return (
    <CTC>
      <a href={`/corsets/${props.CorsetName}`}>
        <h2>{props.CorsetName}</h2>
        <img
          alt={props.CorsetAlt}
          src={`http://res.cloudinary.com/www-cinchedtight-com/image/upload/v1533177121/${
            props.CorsetThumbnailSource
          }`}
        />
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
