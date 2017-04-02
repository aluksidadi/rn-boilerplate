import React, {PropTypes, Component} from 'react';
import {View} from 'react-native';
import {connect} from 'react-redux';
import Home from './components/Home';
import HomeModal from './components/HomeModal';
import {SpinnerOverlay} from '../../components'
import {openHomeModal, closeHomeModal} from './homeActions.js';
import {changeScene} from '../../modules/navigation/navigationActions.js';
import OpenDrawerButtonContainer from '../../modules/navigation/OpenDrawerButtonContainer';
import NavBar from '../../modules/navigation/components/NavBar';
import commonStyles from '../../styles/common';
import {t} from '../../i18n';

class HomeContainer extends Component {
  static propTypes = {
    me: PropTypes.object,
    isHomeModalOpen: PropTypes.bool.isRequired,
    changeScene: PropTypes.func.isRequired,
    openHomeModal: PropTypes.func.isRequired,
    closeHomeModal: PropTypes.func.isRequired,
  };

  static renderNavigationBar = (props) => {
    return (
      <NavBar
        title={t('homeScene', 'home')}
        leftButton={<OpenDrawerButtonContainer />} />
    );
  };

  render() {
    const {me, isHomeModalOpen, openHomeModal, closeHomeModal} = this.props;

    if (!me) {
      return <SpinnerOverlay show={true} />
    }

    return (
      <View style={commonStyles.fullScreen}>
        <HomeModal isHomeModalOpen={isHomeModalOpen} closeHomeModal={closeHomeModal} />
        <Home
          me={me}
          openHomeModal={openHomeModal} />
      </View>
    );
  }
}

function mapStateToProps(state) {
  return {
    ...state.homeScene,
    me: state.app.me,
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
