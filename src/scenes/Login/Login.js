import React, { Component } from 'react';
import { connect } from 'react-redux';
import Login from './components/Login';
import { login, changeFormValue } from './loginActions.js';
// import { changeScene } from '../actions/navigationActions.js';

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
)(Login);
