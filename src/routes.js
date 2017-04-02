import React, {Component} from 'react';

// router
import {Router, Scene, Actions} from 'react-native-router-flux';

// components
import Login from './scenes/Login';
import Home from './scenes/Home';
import Profile from './scenes/Profile';
import Splash from './scenes/Splash';
import NavigationDrawerContainer from './modules/navigation/NavigationDrawerContainer';

export const SCENES = {
  splash: {
    key: 'splash',
    component: Splash,
    initial: true,
    hideNavBar: true,
  },
  login: {
    key: 'login',
    component: Login,
    initial: false,
    hideNavBar: true,
  },
  home: {
    key: 'home',
    component: Home,
    initial: false,
    hideNavBar: false,
  },
  profile: {
    key: 'profile',
    component: Profile,
    initial: false,
    hideNavBar: false,
  },
};

const scenes = Actions.create(
  <Scene key="root">
    <Scene {...SCENES.splash} />
    <Scene {...SCENES.login} />
    <Scene {...SCENES.home} />
    <Scene {...SCENES.profile} />
  </Scene>
);

export default class Routes extends Component {
  render() {
    return (
      <NavigationDrawerContainer>
        <Router scenes={scenes} />
      </NavigationDrawerContainer>
    );
  }
}
