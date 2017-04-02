import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';

// components
import Login from './components/Login';

// actions
import {changeFormValue} from './loginActions';

// module actions
import {login} from '../../modules/auth/authActions';
// import {changeScene} from '../../modules/navigation/navigationActions.js';

class LoginContainer extends Component {
  static propTypes = {
    // states
    form: PropTypes.shape({
      username: PropTypes.string,
      password: PropTypes.string,
    }),

    // actions
    changeFormValue: PropTypes.func.isRequired,

    // module states
    isLoggingIn: PropTypes.bool.isRequired,
    
    // module actions
    login: PropTypes.func.isRequired,
  };

  render() {
    return <Login {...this.props} />
  }
}

function mapStateToProps(state) {
  return {
    // states
    ...state.loginScene,

    // module states
    isLoggingIn: state.auth.isLoggingIn,
  };
}

export default connect(
  mapStateToProps,
  {
    // actions
    changeFormValue,

    // module actions
    login,
    // changeScene,
  }
)(LoginContainer);
