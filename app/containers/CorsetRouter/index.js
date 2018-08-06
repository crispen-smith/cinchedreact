/**
 *
 * CorsetRouter
 *
 */

import React from 'react';
import { Switch, Route } from 'react-router-dom';
import styled from 'styled-components';

import CorsetEditor from 'containers/CorsetEditor';
import CorsetGallery from 'containers/CorsetGallery';
import CorsetCreator from 'containers/CorsetCreator';
import Corset from 'containers/Corset';

const NF = styled.div`
  font-size: 2rem;
  width: 100%;
  padding: 0;
  padding-top: 3rem;
  margin: 0;
  text-align: center;
`;

const NotFound = () => <NF>Oh-oh, looks like something went wrong.</NF>;

const CorsetRouter = () => (
  <Switch>
    <Route exact path="/corsets/edit/:id" component={CorsetEditor} />
    <Route
      exact
      path="/corsets/:filter(all|overbust|underbust)"
      component={CorsetGallery}
    />
    <Route
      exact
      path="/corsets/:filter(overbust|underbust)/:id"
      component={Corset}
    />
    <Route exact path="/corsets/create/" component={CorsetCreator} />
    <Route exact path="/corsets/" component={CorsetGallery} />
    <Route component={NotFound} />
  </Switch>
);

export default CorsetRouter;
