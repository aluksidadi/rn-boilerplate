import React, { Component } from 'react';
import { Router, Scene, Schema, TabBar, Actions } from 'react-native-router-flux';
import Login from './scenes/Login';
import { Text } from 'react-native';

export default class Routes extends Component {
  render() {
    return (
      <Router>
        <Scene key="root">
          <Scene
              key="login"
              component={Login}
              title="Login"
              initial={true}
              hideNavBar={true}
          />
        </Scene>
      </Router>
    );
  }
}
