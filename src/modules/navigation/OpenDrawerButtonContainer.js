import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';
import {openDrawer, closeDrawer} from './navigationActions';
import {TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import * as colors from '../../styles/colors';
import * as font from '../../styles/font';

class OpenDrawerButtonContainer extends Component {
  static propTypes = {
    isDrawerOpen: PropTypes.bool.isRequired,
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