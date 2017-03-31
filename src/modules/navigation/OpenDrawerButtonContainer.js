import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';
import {openDrawer, closeDrawer} from './navigationActions';
import {Button} from 'react-native';

class OpenDrawerButtonContainer extends Component {
  static propTypes = {
    isDrawerOpen: PropTypes.bool.isRequired,
    openDrawer: PropTypes.func.isRequired,
    closeDrawer: PropTypes.func.isRequired,
  };

  render(){
    const {isDrawerOpen, openDrawer, closeDrawer} = this.props;
    return (
      <Button onPress={isDrawerOpen ? closeDrawer : openDrawer} title="X" />
    );
  }
}

function mapStateToProps(state) {
  const {isDrawerOpen} = state.navigation;
  return {
    isDrawerOpen,
  };
}

export default connect(
  mapStateToProps,
  {
    openDrawer,
    closeDrawer,
  }
)(OpenDrawerButtonContainer);