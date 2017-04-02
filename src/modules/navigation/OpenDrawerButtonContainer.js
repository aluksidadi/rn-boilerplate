import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';

// actions
import {openDrawer, closeDrawer} from './navigationActions';

// components
import {TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

// styles
import * as colors from '../../styles/colors';
import * as font from '../../styles/font';

class OpenDrawerButtonContainer extends Component {
  static propTypes = {
    // states
    isDrawerOpen: PropTypes.bool.isRequired,

    // actions
    openDrawer: PropTypes.func.isRequired,
    closeDrawer: PropTypes.func.isRequired,
  };

  render(){
    const {isDrawerOpen, openDrawer, closeDrawer} = this.props;
    return (
      <TouchableOpacity onPress={isDrawerOpen ? closeDrawer : openDrawer}>
        <Icon name='navicon' size={font.SIZE_H1} color={colors.WHITE} />
      </TouchableOpacity>
    );
  }
}

function mapStateToProps(state) {
  const {isDrawerOpen} = state.navigation;
  return {
    // states
    isDrawerOpen,
  };
}

export default connect(
  mapStateToProps,
  {
    // actions
    openDrawer,
    closeDrawer,
  }
)(OpenDrawerButtonContainer);