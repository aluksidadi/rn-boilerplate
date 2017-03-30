import React, { PropTypes, Component } from 'react';
import Routes from '../../routes.js';
import { STORAGE_KEYS } from '../../constants/constants';
import { AsyncStorage } from 'react-native';
import { connect } from 'react-redux';
import { getLastSession } from './appActions';

class App extends Component {
  static propTypes = {
    getLastSession: PropTypes.func.isRequired,
  };

  componentDidMount() {
    this.props.getLastSession();
  }

  render() {
    return (
      <Routes />
    );
  }
}

function mapStateToProps(state) {
  return {
    ...state.app,
  };
}

export default connect(
  mapStateToProps,
  {
    getLastSession,
    // changeScene,
  }
)(App);