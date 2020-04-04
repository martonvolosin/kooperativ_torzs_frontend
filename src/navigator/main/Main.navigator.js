import React from 'react';
import { Switch, BrowserRouter as Router, Route } from 'react-router-dom';

import {
  Login,
  Chat,
  RegistrationLocation,
  NewItem,
  Home,
  Profile,
  Review,
  Registration,
  RegistrationSuccess,
} from '../../screens';

const MainNavigator = () => {
  const routes = (
    <Switch>
      <Route exact path="/" component={Login} />
      <Route path="/registration" component={Registration} />
      <Route path="/registration-location" component={RegistrationLocation} />
      <Route path="/registration-success" component={RegistrationSuccess} />
      <Route path="/profile" component={Profile} />
      <Route path="/home" component={Home} />
      <Route path="/new-item" component={NewItem} />
      <Route path="/chat" component={Chat} />
      <Route path="/review" component={Review} />
    </Switch>
  );

  return <Router>{routes}</Router>;
};

export { MainNavigator };
