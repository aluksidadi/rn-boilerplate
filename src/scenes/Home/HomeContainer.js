import React, {PropTypes, Component} from 'react';
import {View} from 'react-native';
import {connect} from 'react-redux';
import Home from './components/Home';
import HomeModal from './components/HomeModal';
import {openHomeModal, closeHomeModal} from './homeActions.js';
import {changeScene} from '../../modules/navigation/navigationActions.js';
import OpenDrawerButtonContainer from '../../modules/navigation/OpenDrawerButtonContainer';
import NavBar from '../../modules/navigation/components/NavBar';
import commonStyles from '../../styles/common';

class HomeContainer extends Component {
  static propTypes = {
    isHomeModalOpen: PropTypes.bool.isRequired,
    changeScene: PropTypes.func.isRequired,
    openHomeModal: PropTypes.func.isRequired,
    closeHomeModal: PropTypes.func.isRequired,
  };

  static renderNavigationBar = (props) => {
    return (
      <NavBar
        title={props.title}
        leftButton={<OpenDrawerButtonContainer />} />
    );
  };

  render() {
    const {isHomeModalOpen, openHomeModal, closeHomeModal} = this.props;

    return (
      <View style={commonStyles.fullScreen}>
        <HomeModal isHomeModalOpen={isHomeModalOpen} closeHomeModal={closeHomeModal} />
        <Home
          openHomeModal={openHomeModal} />
      </View>
    );
  }
}

function mapStateToProps(state) {
  return {
    ...state.homeScene,
  };
}

export default connect(
  mapStateToProps,
  {
    changeScene,
    openHomeModal,
    closeHomeModal,
  }
)(HomeContainer);
