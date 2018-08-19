/**
 *
 * CorsetCreator
 *
 */

import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { createStructuredSelector } from 'reselect';
import { Redirect } from 'react-router-dom';

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
import NotLoggedInComponent from '../../components/NotLoggedInComponent';

/* eslint-disable react/prefer-stateless-function */
export class CorsetCreator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      corsetGallery: props.corsetGallery,
      productName: '',
      productType: 'Overbust',
      enabled: false,
      created: false,
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleNameChange = this.handleNameChange.bind(this);
    this.handleProductChange = this.handleProductChange.bind(this);
    this.handleChange = changeHandler;
  }

  handleNameChange(e) {
    if (e.persist) e.persist();

    e.preventDefault();
    this.nameValueCallback = e.nameCallback
      ? e.nameCallback.bind(this)
      : () => {};
    this.nameEnabledCallBack = e.enabledCallBack
      ? e.enabledCallBack.bind(this)
      : () => {};
    this.nameChangeCallback = () => {
      this.nameValueCallback();
      this.setState(
        { enabled: this.handleChange(e.target.value, this.state) },
        this.nameEnabledCallBack,
      );
    };
    this.setState({ productName: e.target.value }, this.nameChangeCallback);
  }

  handleProductChange(e) {
    if (e.persist) e.persist();

    e.preventDefault();
    this.typeValueCallback = e.valueCallback
      ? e.valueCallback.bind(this)
      : () => {};
    this.typeEnabledCallback = e.enabledCallback
      ? e.enabledCallBack.bind(this)
      : () => {};
    this.setState({ productType: e.target.value });
    this.setState({ enabled: this.handleChange(e.target.value, this.state) });
  }

  handleSubmit(e) {
    if (e.persist) e.persist();

    e.preventDefault();
    this.action = actions.create({
      name: this.state.productName,
      type: this.state.productType,
    });
    this.props.dispatch(this.action);
    this.submitCallback = e.handler ? e.handler.bind(this) : () => {};
    this.setState({ created: true }, this.submitCallback);
  }

  render() {
    if (!this.props.loggedIn)
      return <NotLoggedInComponent title="Corset Creator" />;
    if (!this.state.created) {
      return (
        <Fragment>
          <Helmet>
            <title>Create a new Corset</title>
            <meta
              name="description"
              content="Use this screen to create a new corset in the corset gallery."
            />
          </Helmet>
          <h1>Create a new Corset</h1>
          <FormComponent>
            <NameBox
              inputName="productName"
              inputLabel="Name"
              onChange={this.handleNameChange}
              value={this.state.productName}
            />
            <DropDown
              inputName="productType"
              inputLabel="Type"
              options={['Overbust', 'Underbust']}
              value={this.state.productType}
              onChange={this.handleProductChange}
            />
            {this.state.enabled ? (
              <SubmitButton
                label="Create"
                enabled
                dataCursor="pointer"
                onClick={this.handleSubmit}
              />
            ) : (
              <SubmitButton
                label="---"
                enabled={false}
                dataCursor="not-allowed"
                onClick={this.handleSubmit}
              />
            )}
          </FormComponent>
        </Fragment>
      );
    }
    return (
      <Redirect
        to={`/corsets/edit/${this.state.productType}/${this.state.productName}`}
      />
    );
  }
}

export function changeHandler(e, state) {
  if (e === '' || state.productName === '') return false;

  const corsets =
    state.corsetGallery && state.corsetGallery.corsets
      ? state.corsetGallery.corsets
      : null;

  if (!corsets || corsets.length === 0 || !corsets.filter) return true;

  const productType =
    e === 'Underbust' || e === 'Overbust' ? e : state.productType;
  const productName =
    e === 'Underbust' || e === 'Overbust' ? state.productName : e;

  const filteredCorsets = corsets.filter(
    corset => corset.type === productType && corset.name === productName,
  );

  return !(filteredCorsets && filteredCorsets.length > 0);
}

CorsetCreator.propTypes = {
  dispatch: PropTypes.func.isRequired,
  loggedIn: PropTypes.bool.isRequired,
  corsetGallery: PropTypes.object.isRequired,
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
