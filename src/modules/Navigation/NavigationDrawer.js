import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';
import Drawer from 'react-native-drawer';
import SideMenu from './components/SideMenu';
import {openDrawer, closeDrawer, changeScene, onNavigate} from './navigationActions';
import {logout} from '../App/appActions';

class NavigationDrawer extends Component {
  static propTypes = {
    isDrawerOpen: PropTypes.bool.isRequired,
    openDrawer: PropTypes.func.isRequired,
    closeDrawer: PropTypes.func.isRequired,
    onNavigate: PropTypes.func.isRequired,
    changeScene: PropTypes.func.isRequired,
    logout: PropTypes.func.isRequired,
  };

  render(){
    return (
      <Drawer
        ref="navigation"
        open={this.props.isDrawerOpen}
        onOpen={this.props.openDrawer}
        onClose={this.props.closeDrawer}
        type="displace"
        content={
          <SideMenu
            changeScene={this.props.changeScene}
            logout={this.props.logout} />
        }
        tapToClose={true}
        openDrawerOffset={0.2}
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
    isDrawerOpen,
  };
}

export default connect(
  mapStateToProps,
  {
    openDrawer,
    closeDrawer,
    changeScene,
    onNavigate,
    logout,
  }
)(NavigationDrawer);