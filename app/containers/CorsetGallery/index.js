/**
 *
 * CorsetGallery
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';
import makeSelectCorsetGallery from './selectors';
import reducer from './reducer';
import saga from './saga';
import * as actions from './actions';

/* eslint-disable react/prefer-stateless-function */
export class CorsetGallery extends React.Component {
  constructor(props) {
    super(props);
    const { filter } = props.match.params;

    const setFilterAction = actions.setFilter(filter);
    props.dispatch(setFilterAction);
  }

  render() {
    const filter = this.props.corsetGallery.filter
      ? this.props.corsetGallery.filter
      : '';

    const displayFilter =
      filter.substring(0, 1).toUpperCase() + filter.substring(1, filter.length);

    return (
      <div>
        <Helmet>
          <title>{`${displayFilter} Corsets at Cinched Tight`}</title>
          <meta
            name="description"
            content={`${displayFilter} Corsets at Cinched Tight`}
          />
        </Helmet>
      </div>
    );
  }
}

CorsetGallery.propTypes = {
  dispatch: PropTypes.func.isRequired,
  match: PropTypes.object.isRequired,
  corsetGallery: PropTypes.object.isRequired,
};

const mapStateToProps = createStructuredSelector({
  corsetGallery: makeSelectCorsetGallery(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

const withReducer = injectReducer({ key: 'corsetGallery', reducer });
const withSaga = injectSaga({ key: 'corsetGallery', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(CorsetGallery);
