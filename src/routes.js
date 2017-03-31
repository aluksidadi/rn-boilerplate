import React, {Component} from 'react';
import {Router, Scene, Schema, TabBar, Actions} from 'react-native-router-flux';
import Login from './scenes/Login';
import Home from './scenes/Home';
import Splash from './scenes/Splash';
import NavigationDrawerContainer from './modules/navigation/NavigationDrawerContainer';

export const SCENES = {
  splash: {
    key: 'splash',
    title: 'Splash',
    component: Splash,
    initial: true,
    hideNavBar: true,
  },
  login: {
    key: 'login',
    title: 'Login',
    component: Login,
    initial: false,
    hideNavBar: true,
  },
  home: {
    key: 'home',
    title: 'Home',
    component: Home,
    initial: false,
    hideNavBar: false,
  },
};

const scenes = Actions.create(
  <Scene key="root">
    <Scene {...SCENES.splash} />
    <Scene {...SCENES.login} />
    <Scene {...SCENES.home} />
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
