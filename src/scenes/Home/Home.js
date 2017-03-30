import React, { Component } from 'react';
import { connect } from 'react-redux';
import Home from './components/Home';
// import {  } from './homeActions.js';
import { changeScene } from '../../modules/Navigation/navigationActions.js';

function mapStateToProps(state) {
  return {
    ...state.homeScene,
  };
}

export default connect(
  mapStateToProps,
  {
    changeScene,
  }
)(Home);
