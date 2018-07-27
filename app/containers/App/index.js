/**
 *
 * App.js
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 *
 * NOTE: while this component should technically be a stateless functional
 * component (SFC), hot reloading does not currently support SFCs. If hot
 * reloading is not a necessity for you then you can refactor it and remove
 * the linting exception.
 */

import React from 'react';
import { Switch, Route } from 'react-router-dom';

import HomePage from 'containers/HomePage/Loadable';
import NotFoundPage from 'containers/NotFoundPage/Loadable';
import BrandedHeader from 'containers/BrandedHeader';
import CorsetRouter from 'containers/CorsetRouter';

export default function App() {
  return (
    <div>
      <BrandedHeader />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route
          exact
          path="/corsets/:action/:subject"
          component={CorsetRouter}
        />
        <Route exact path="/corsets/:action" component={CorsetRouter} />
        <Route exact path="/corsets" component={CorsetRouter} />
        <Route component={NotFoundPage} />
      </Switch>
    </div>
  );
}
