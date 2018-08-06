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
import {
  makeSelectCorsetGallery,
  makeSelectCorsetGalleryFilter,
  makeSelectorFilteredCorsets,
} from './selectors';
import { makeSelectLoggedIn } from '../BrandedHeader/selectors';
import reducer from './reducer';
import saga from './saga';
import * as actions from './actions';

import CorsetThumbnailComponent from '../../components/CorsetThumbnailComponent';
import { ProductGrid, ProductH1 } from '../../resources/ProductStyling';

/* eslint-disable react/prefer-stateless-function */
export class CorsetGallery extends React.Component {
  constructor(props) {
    super(props);
    const { filter } = props.match.params;

    const setFilterAction = actions.setFilter(filter);
    props.dispatch(setFilterAction);
  }
  componentDidMount() {
    this.props.dispatch(actions.resetAction());
  }

  render() {
    const { filter } = this.props;

    const displayFilter =
      filter && filter.substring
        ? filter.substring(0, 1).toUpperCase() +
          filter.substring(1, filter.length)
        : '';

    const displayCorsets =
      this.props.displayCorsets.length >= 1 ? (
        this.props.displayCorsets.map(corset => (
          <CorsetThumbnailComponent
            CorsetName={corset.name}
            CorsetAlt="Create New"
            CorsetThumbnailSource="sample.jpg"
            Summary="Create New"
          />
        ))
      ) : (
        <div>&nbsp;</div>
      );

    const CreateThumbnail = this.props.loggedIn ? (
      <CorsetThumbnailComponent
        CorsetName="Create"
        CorsetAlt="Create New"
        CorsetThumbnailSource="sample.jpg"
        Summary="Create New"
      />
    ) : (
      <div>&nbsp;</div>
    );

    return (
      <div>
        <Helmet>
          <title>{`${displayFilter} Corsets at Cinched Tight`}</title>
          <meta
            name="description"
            content={`${displayFilter} Corsets at Cinched Tight`}
          />
        </Helmet>
        <ProductH1>{displayFilter} Corsets</ProductH1>
        <ProductGrid>
          {displayCorsets}
          {CreateThumbnail}
        </ProductGrid>
      </div>
    );
  }
}

CorsetGallery.propTypes = {
  dispatch: PropTypes.func.isRequired,
  match: PropTypes.object.isRequired,
  displayCorsets: PropTypes.array,
  filter: PropTypes.string,
  loggedIn: PropTypes.bool.isRequired,
};

const mapStateToProps = createStructuredSelector({
  corsetGallery: makeSelectCorsetGallery(),
  filter: makeSelectCorsetGalleryFilter(),
  loggedIn: makeSelectLoggedIn(),
  displayCorsets: makeSelectorFilteredCorsets(),
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
