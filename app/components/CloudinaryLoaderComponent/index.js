/**
 *
 * CloudinaryLoaderComponent
 *
 */

import React from 'react';
import Dropzone from 'react-dropzone';
import request from 'superagent';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import ErrorBar from '../ErrorBar';

const CLC = styled.div`
  border-radius: 10px;

  input {
    border-radius: 20px;
  }
`;

const CLOUDINARY_UPLOAD_URL =
  'https://api.cloudinary.com/v1_1/www-cinchedtight-com/upload';

/* eslint-disable react/prefer-stateless-function */
class CloudinaryLoaderComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = { error: false };
    this.onImageDrop = this.onImageDrop.bind(this);
  }
  imageDrop(files) {
    const upload = request
      .post(CLOUDINARY_UPLOAD_URL)
      .field('upload_preset', this.props.preset)
      .field('file', files[0]);

    upload.end((err, response) => {
      if (err) {
        this.setState({ error: true, err });
      }
      if (response.body.secure_url !== '') {
        const action = this.props.completionHandler(response);
        this.props.dispatch(action);
      }
    });
  }

  render() {
    const error = this.state.error ? (
      <ErrorBar>{this.state.err}</ErrorBar>
    ) : null;
    return (
      <CLC>
        <Dropzone multiple={false} accept="image/*" onDrop={this.onImageDrop}>
          <p>{this.props.dropMessage}</p>
          {error}
        </Dropzone>
      </CLC>
    );
  }
}

CloudinaryLoaderComponent.propTypes = {
  completionHandler: PropTypes.func.isRequired,
  preset: PropTypes.oneOf(['corset', 'lingerie', 'latex', 'client']),
  dropMessage: PropTypes.string.isRequired,
  dispatch: PropTypes.func.isRequired,
};

export default CloudinaryLoaderComponent;
