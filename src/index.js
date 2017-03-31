import React, {Component} from 'react';
import {Provider} from 'react-redux';
import AppContainer from './modules/app/AppContainer';

import configureStore from './store/configureStore';

const store = configureStore();

export default class Main extends Component {
  render() {
    return (
      <Provider store={store}>
        <AppContainer />
      </Provider>
    );
  }
}
