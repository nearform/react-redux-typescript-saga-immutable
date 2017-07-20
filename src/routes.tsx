import * as React from 'react';
import { Redirect, Route, Switch } from 'react-router';

import Users from './containers/Users/';

export const RouteMap: React.StatelessComponent<{}> = () => (
  <div>
    <Switch>
      <Redirect exact from="/" to="/users" />
      <Route path="/users" component={Users} />
    </Switch>
  </div>
);
