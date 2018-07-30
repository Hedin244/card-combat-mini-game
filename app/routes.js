/* eslint flowtype-errors/show-errors: 0 */
import React from 'react';
import { Switch, Route } from 'react-router';
import App from './containers/App';
import HomeScene from './scenes/Home';
import CombatScene from './scenes/Combat';

export default () => (
  <App>
    <Switch>
      <Route path="/combat" component={ CombatScene } />
      <Route path="/" component={ HomeScene } />
    </Switch>
  </App>
);
