import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';
import Profile from './components/Profile';
import {getProfile, saveProfile, toggleEditMode, changeFormValue} from './profileActions';
import {SpinnerOverlay} from '../../components'
import {changeScene} from '../../modules/navigation/navigationActions.js';
import OpenDrawerButtonContainer from '../../modules/navigation/OpenDrawerButtonContainer';
import NavBar from '../../modules/navigation/components/NavBar';
import commonStyles from '../../styles/common';
import {t} from '../../i18n';
import dictionary from './dictionary';

class ProfileContainer extends Component {
  static propTypes = {
    isFetchingProfile: PropTypes.bool.isRequired,
    isSavingProfile: PropTypes.bool.isRequired,
    isEditable: PropTypes.bool.isRequired,
    isEditMode: PropTypes.bool.isRequired,
    user: PropTypes.object,
    form: PropTypes.shape({
      firstName: PropTypes.string,
      lastName: PropTypes.string,
    }),
    toggleEditMode: PropTypes.func.isRequired,
    saveProfile: PropTypes.func.isRequired,
    getProfile: PropTypes.func.isRequired,
    changeFormValue: PropTypes.func.isRequired,
  };

  static renderNavigationBar = (props) => {
    return (
      <NavBar
        title={t(dictionary.profile)}
        leftButton={<OpenDrawerButtonContainer />} />
    );
  };

  componentDidMount() {
    this.props.getProfile(this.props.userId)
  }

  render() {
    const {user, isFetchingProfile} = this.props;

    if (!user || isFetchingProfile) {
      return <SpinnerOverlay show={true} />
    }

    return <Profile {...this.props} />
  }
}

function mapStateToProps(state) {
  return {
    ...state.profileScene,
  };
}

export default connect(
  mapStateToProps,
  {
    getProfile,
    saveProfile,
    toggleEditMode,
    changeFormValue,
  }
)(ProfileContainer);
