/**
 *
 * CorsetRouter
 *
 */

import React from 'react';
import { Switch, Route } from 'react-router-dom';

import CorsetEditor from 'containers/CorsetEditor';
import CorsetGallery from 'containers/CorsetGallery';
import CorsetReset from 'containers/CorsetReset';
import CorsetCreator from 'containers/CorsetCreator';
import Corset from 'containers/Corset';
import NotFoundComponent from '../../components/NotFoundComponent';

const CorsetRouter = () => (
  <Switch>
    <Route
      exact
      path="/corsets/edit/:filter(overbust|underbust)/:id"
      component={CorsetEditor}
    />

    <Route
      exact
      path="/corsets/:filter(all|overbust|underbust)"
      component={CorsetGallery}
    />

    <Route exact path="/corsets/reset/" component={CorsetReset} />

    <Route
      exact
      path="/corsets/:filter(overbust|underbust)/:id"
      component={Corset}
    />
    <Route exact path="/corsets/create/" component={CorsetCreator} />
    <Route exact path="/corsets/" component={CorsetGallery} />
    <Route component={NotFoundComponent} />
  </Switch>
);

export default CorsetRouter;
