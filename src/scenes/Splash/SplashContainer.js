import React, { PropTypes, Component } from 'react';
import Routes from '../../routes.js';
import {connect} from 'react-redux';
import {getLastSession} from '../../modules/App/appActions';
import {changeScene} from '../../modules/Navigation/navigationActions';
import Splash from './components/Splash';
import {SCENES} from '../../routes';
import {ActionConst} from 'react-native-router-flux';
import {SPLASH_WAIT} from '../../constants/constants';

class SplashContainer extends Component {
  static propTypes = {
    getLastSession: PropTypes.func.isRequired,
    changeScene: PropTypes.func.isRequired,
  };

  componentDidMount() {
    setTimeout(() => {
      this.props
        .getLastSession()
        .then(token => {
          if (token) {
            this.props.changeScene(SCENES.home.key, ActionConst.RESET);
          } else {
            this.props.changeScene(SCENES.login.key, ActionConst.RESET);
          }
        });
    }, SPLASH_WAIT);
  }

  render() {
    return (
      <Splash />
    );
  }
}

function mapStateToProps(state) {
  return {};
}

export default connect(
  mapStateToProps,
  {
    getLastSession,
    changeScene,
  }
)(SplashContainer);