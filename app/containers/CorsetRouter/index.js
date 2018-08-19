/**
 *
 * CorsetRouter
 *
 */

import React from 'react';
import { Switch, Route } from 'react-router-dom';

import CorsetEditor from 'containers/CorsetEditor';
import CorsetGallery from 'containers/CorsetGallery';
import CorsetCreator from 'containers/CorsetCreator';
import Corset from 'containers/Corset';
import NotFoundComponent from '../../components/NotFoundComponent';

const CorsetRouter = () => (
  <Switch>
    <Route
      exact
      sensitive
      path="/corsets/edit/:filter(Overbust|Underbust)/:id"
      component={CorsetEditor}
    />
    <Route
      exact
      path="/corsets/:filter(all|Overbust|Underbust)"
      component={CorsetGallery}
    />
    <Route
      exact
      path="/corsets/:filter(Overbust|Underbust)/:id"
      component={Corset}
    />
    <Route exact path="/corsets/create/" component={CorsetCreator} />
    <Route exact path="/corsets/" component={CorsetGallery} />
    <Route component={NotFoundComponent} />
  </Switch>
);

export default CorsetRouter;
