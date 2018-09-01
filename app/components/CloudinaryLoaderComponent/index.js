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

export function onImageDrop(files) {
  const upload = request
    .post(this.CLOUDINARY_UPLOAD_URL)
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

/* eslint-disable react/prefer-stateless-function */
class CloudinaryLoaderComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = { error: false };
    this.CLOUDINARY_UPLOAD_URL =
      'https://api.cloudinary.com/v1_1/www-cinchedtight-com/upload';
    this.onImageDrop = onImageDrop.bind(this);
  }

  render() {
    const error = this.state.error ? (
      <ErrorBar message={this.state.err} />
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
  completionHandler: PropTypes.func.isRequired, // eslint-disable-line react/no-unused-prop-types
  preset: PropTypes.oneOf(['corset', 'lingerie', 'latex', 'client']), // eslint-disable-line react/no-unused-prop-types
  dropMessage: PropTypes.string.isRequired,
  dispatch: PropTypes.func.isRequired, // eslint-disable-line react/no-unused-prop-types
};

export default CloudinaryLoaderComponent;
