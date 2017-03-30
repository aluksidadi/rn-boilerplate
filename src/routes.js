import React, { Component } from 'react';
import { Router, Scene, Schema, TabBar, Actions } from 'react-native-router-flux';
import Login from './scenes/Login';
import Home from './scenes/Home';
import { Text } from 'react-native';
import NavigationDrawer from './modules/Navigation/NavigationDrawer';

export const SCENES = {
  login: {
    key: 'login',
    title: 'Login',
    component: Login,
    initial: true,
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

// const scenes = Object.keys(SCENES).map((key) => <Scene {...SCENES[key]} />);

export default class Routes extends Component {
  render() {
    return (
      <NavigationDrawer>
        <Router>
          <Scene key="root">
            <Scene {...SCENES.login} />
            <Scene {...SCENES.home} />
          </Scene>
        </Router>
      </NavigationDrawer>
    );
  }
}
