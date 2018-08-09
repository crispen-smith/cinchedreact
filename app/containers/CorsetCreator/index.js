/**
 *
 * CorsetCreator
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { createStructuredSelector } from 'reselect';

import { compose } from 'redux';

import injectReducer from 'utils/injectReducer';
import {
  makeSelectCorsetGallery,
  makeSelectCurrentCorset,
  makeSelectorFilteredCorsets,
} from '../CorsetGallery/selectors';
import { makeSelectLoggedIn } from '../BrandedHeader/selectors';
import reducer from './reducer';
import * as actions from './actions';
import FormComponent from '../../components/FormComponent';
import NameBox from '../../components/NameBox';
import DropDown from '../../components/DropDown';
import SubmitButton from '../../components/SubmitButton';
import { resetAction } from '../CorsetGallery/actions';

/* eslint-disable react/prefer-stateless-function */
export class CorsetCreator extends React.Component {
  constructor(props) {
    super(props);
    this.state = { productName: '', productType: 'overbust' };
    this.handleInitialFormChange = this.handleInitialFormChange.bind(this);
    this.handleInitialFormSubmit = this.handleInitialFormSubmit.bind(this);
  }

  componentWillUnmount() {
    this.props.dispatch(resetAction());
  }

  handleInitialFormChange(e) {
    e.preventDefault();
    const { corsets } = this.props;
    const { productType } = this.state;
    const { productName } = this.state;

    const filteredCorsets = corsets.filter(
      corset => corset.type === productType && corset.name === productName,
    );
    const valid = filteredCorsets.length === 0;
    this.setState('valid', valid);
  }
  handleInitialFormSubmit(e) {
    e.preventDefault();
    const action = actions.create({
      name: this.state.productName,
      type: this.state.productType,
    });
    this.props.dispatch(action);
  }

  render() {
    let form;
    if (!this.props.currentCorset) {
      const handleNameChange = e =>
        this.setState({ productName: e.target.value });
      const handleTypeChange = e =>
        this.setState({ productType: e.target.value });

      form = (
        <FormComponent
          onSubmit={this.handleInitialFormSubmit}
          onChange={this.handleInitialFormChange}
          action={actions.create}
          corsets={this.props.corsetGallery.corsets}
        >
          <NameBox
            inputName="productName"
            inputLabel="Name"
            onChange={handleNameChange}
            value={this.state.productName}
          />
          <DropDown
            inputName="productType"
            inputLabel="Type"
            options={['Overbust', 'Underbust']}
            value={this.state.productType}
            onChange={handleTypeChange}
          />
          <SubmitButton label="create" />
        </FormComponent>
      );
    }
    if (!this.props.loggedIn) {
      return (
        <React.Fragment>
          <h1>Corset Creator</h1>
          <p>you must be logged in as an admin to access this page</p>
        </React.Fragment>
      );
    }
    return (
      <div>
        <Helmet>
          <title>Create a new Corset</title>
          <meta
            name="description"
            content="Use this screen to create a new corset in the corset gallery."
          />
        </Helmet>
        {form}
        <a href="/corsets/all">Gallery</a>lj
      </div>
    );
  }
}

CorsetCreator.propTypes = {
  dispatch: PropTypes.func.isRequired,
  corsetGallery: PropTypes.object,
  currentCorset: PropTypes.string,
  corsets: PropTypes.arrayOf(PropTypes.object),
  loggedIn: PropTypes.bool.isRequired,
};

const mapStateToProps = createStructuredSelector({
  corsetGallery: makeSelectCorsetGallery(),
  currentCorset: makeSelectCurrentCorset(),
  filteredCorsets: makeSelectorFilteredCorsets(),
  loggedIn: makeSelectLoggedIn(),
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

export default compose(
  withReducer,
  withConnect,
)(CorsetCreator);
