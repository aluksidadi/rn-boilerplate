import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';
import Login from './components/Login';
import {login, changeFormValue} from './loginActions.js';
// import {changeScene} from '../../modules/navigation/navigationActions.js';

class LoginContainer extends Component {
  static propTypes = {
    form: PropTypes.shape({
      username: PropTypes.string,
      password: PropTypes.string,
    }),
    isLogging: PropTypes.bool.isRequired,
    changeFormValue: PropTypes.func.isRequired,
    login: PropTypes.func.isRequired,
  };

  render() {
    return <Login {...this.props} />
  }
}

function mapStateToProps(state) {
  return {
    ...state.loginScene,
  };
}

export default connect(
  mapStateToProps,
  {
    changeFormValue,
    login,
    // changeScene,
  }
)(LoginContainer);
