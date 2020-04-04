import React from 'react';
import { Switch, BrowserRouter as Router, Route } from 'react-router-dom';
import LoginScreen from '../screens/LoginScreen';
import ChatScreen from '../screens/ChatScreen';
import LocationRegistrationScreen from '../screens/LocationRegistrationScreen';
import AddNewListingScreen from '../screens/AddNewListingScreen';
import MainDetailsScreen from '../screens/MainDetailsScreen';
import MainListScreen from '../screens/MainListScreen';
import ProfileScreen from '../screens/ProfileScreen';
import ReviewScreen from '../screens/ReviewScreen';
import UserRegistrationScreen from '../screens/UserRegistrationScreen';

const Navigator = () => {
  const routes = (
    <Switch>
      <Route exact path="/" component={LoginScreen} />
      <Route path="/chat" component={ChatScreen} />
      <Route
        path="/locationRegistration"
        component={LocationRegistrationScreen}
      />
      <Route path="/addNewListing" component={AddNewListingScreen} />
      <Route path="/mainDetails" component={MainDetailsScreen} />
      <Route path="/mainList" component={MainListScreen} />
      <Route path="/profile" component={ProfileScreen} />
      <Route path="/review" component={ReviewScreen} />
      <Route path="/userRegistration" component={UserRegistrationScreen} />
    </Switch>
  );

  return <Router>{routes}</Router>;
};

export default Navigator;
