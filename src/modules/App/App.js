import React, { PropTypes, Component } from 'react';
import Routes from '../../routes.js';
import { connect } from 'react-redux';

class App extends Component {
  static propTypes = {
    me: PropTypes.object,
    token: PropTypes.string,
    isFetchingMe: PropTypes.bool,
  };

  componentDidMount() {
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
  }
)(App);