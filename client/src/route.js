import React from 'react';
import { Route, IndexRoute } from 'react-router';

/**
 * Import all page components here
 */
 import App from './App';
 import DashboardCards from './dashboardcards';
 import Transactions from './transactions';
 import Users from '../users/user';

/**
 * All routes go here.
 * Don't forget to import the components above after adding new route.
 */
export default (
  <Route history={history}>
  <Route path="/" component={App}>
    <Route path="/dashboard" component={DashboardCards} />
    <Route path="/transactions" component={Transactions} />
    <Route path="/users" component={Users} />

  </Route>
);
