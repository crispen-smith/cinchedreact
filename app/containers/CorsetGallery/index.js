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
import ProductGrid from '../../components/ProductGrid';
import ProductTitle from '../../components/ProductTitle';

/* eslint-disable react/prefer-stateless-function */
export class CorsetGallery extends React.Component {
  render() {
    /* Pre-render refresh the Corsets filter.  This is done pre-filter as it's impossible to
    reasonably predict whether a constructor is going to be called.  */

    /* eslint-disable no-constant-condition */
    // GET THE CURRENT URL BASED FILTER
    let { filter } = this.props.match.params;
    if (typeof filter === 'undefined') filter = 'all';
    else
      filter =
        filter.substring(0, 1).toUpperCase() +
        filter.substring(1, filter.length);

    // IF CURRENT URL BASED FILTER DOESN'T MATCH MOST RECENT FILTER, UPDATE THE STATE
    if (filter !== this.props.filter) {
      const setFilterAction = actions.setFilter(filter);
      this.props.dispatch(setFilterAction);
    }

    let displayFilter;
    if (filter === 'all') displayFilter = '';
    else displayFilter = filter;

    const displayCorsets =
      this.props.displayCorsets.length >= 1 ? (
        this.props.displayCorsets.map(corset => (
          <CorsetThumbnailComponent
            CorsetName={corset.name}
            CorsetAlt="Create New"
            CorsetThumbnailSource="sample.jpg"
            Summary="Create New"
            key={corset.name}
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
        <ProductTitle>{displayFilter} Corsets</ProductTitle>
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
