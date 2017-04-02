import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';
import Profile from './components/Profile';
import {getProfile, toggleEditMode, changeFormValue} from './profileActions';
import {updateMyProfile} from '../../modules/me/meActions';
import {SpinnerOverlay} from '../../components'
import {changeScene} from '../../modules/navigation/navigationActions';
import OpenDrawerButtonContainer from '../../modules/navigation/OpenDrawerButtonContainer';
import NavBar from '../../modules/navigation/components/NavBar';
import commonStyles from '../../styles/common';
import {t} from '../../i18n';
import dictionary from './dictionary';

class ProfileContainer extends Component {
  static propTypes = {
    isFetchingProfile: PropTypes.bool.isRequired,
    isEditable: PropTypes.bool.isRequired,
    isEditMode: PropTypes.bool.isRequired,
    user: PropTypes.object,
    form: PropTypes.shape({
      first_name: PropTypes.string,
      last_name: PropTypes.string,
    }),
    toggleEditMode: PropTypes.func.isRequired,
    getProfile: PropTypes.func.isRequired,
    changeFormValue: PropTypes.func.isRequired,
    isUpdatingMyProfile: PropTypes.bool.isRequired,
    updateMyProfile: PropTypes.func.isRequired,
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
    isUpdatingMyProfile: state.me.isUpdatingMyProfile,
  };
}

export default connect(
  mapStateToProps,
  {
    getProfile,
    toggleEditMode,
    changeFormValue,
    updateMyProfile,
  }
)(ProfileContainer);
