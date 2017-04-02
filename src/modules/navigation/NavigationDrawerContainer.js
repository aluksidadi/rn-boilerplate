import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';

// components
import Drawer from 'react-native-drawer';
import SideMenu from './components/SideMenu';

// actions
import {openDrawer, closeDrawer, changeScene, onNavigate} from './navigationActions';

// other module actions
import {logout} from '../auth/authActions';

class NavigationDrawerContainer extends Component {
  static propTypes = {
    // states
    isDrawerOpen: PropTypes.bool.isRequired,

    // actions
    openDrawer: PropTypes.func.isRequired,
    closeDrawer: PropTypes.func.isRequired,
    onNavigate: PropTypes.func.isRequired,
    changeScene: PropTypes.func.isRequired,

    // other module actions
    logout: PropTypes.func.isRequired,
  };

  render(){
    return (
      <Drawer
        ref="navigation"
        open={this.props.isDrawerOpen}
        onClose={this.props.closeDrawer}
        type="displace"
        content={
          <SideMenu
            changeScene={this.props.changeScene}
            logout={this.props.logout} />
        }
        tapToClose={true}
        openDrawerOffset={0.6}
        panCloseMask={0.2}
        negotiatePan={true}
        tweenHandler={(ratio) => ({
          main: {opacity: Math.max(0.54,1-ratio)}
        })}>
        {this.props.children}
      </Drawer>
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
    changeScene,
    onNavigate,

    // other module actions
    logout,
  }
)(NavigationDrawerContainer);