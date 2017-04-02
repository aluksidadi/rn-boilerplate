import React, {PropTypes, Component} from 'react';
import Routes from '../../routes.js';
import {connect} from 'react-redux';
import {getLastSession} from '../../modules/auth/authActions';
import {changeScene} from '../../modules/navigation/navigationActions';
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
    this.props
      .getLastSession()
      .then(token => {
        if (token) {
          setTimeout(() => {
            this.props.changeScene(SCENES.home.key, {}, ActionConst.RESET);
          }, SPLASH_WAIT);
        } else {
          setTimeout(() => {
            this.props.changeScene(SCENES.login.key, {}, ActionConst.RESET);
          }, SPLASH_WAIT);
        }
      });
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