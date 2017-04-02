import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';

// components
import Profile from './components/Profile';
import {SpinnerOverlay} from '../../components'
import OpenDrawerButtonContainer from '../../modules/navigation/OpenDrawerButtonContainer';
import NavBar from '../../modules/navigation/components/NavBar';

// actions
import {getProfile, toggleEditMode, changeFormValue} from './profileActions';

// module actions
import {updateMyProfile} from '../../modules/me/meActions';
import {changeScene} from '../../modules/navigation/navigationActions';

// styles
import commonStyles from '../../styles/common';

// i18n
import {t} from '../../i18n';
import dictionary from './dictionary';

class ProfileContainer extends Component {
  static propTypes = {
    // states
    isFetchingProfile: PropTypes.bool.isRequired,
    isEditable: PropTypes.bool.isRequired,
    isEditMode: PropTypes.bool.isRequired,
    user: PropTypes.object,
    form: PropTypes.shape({
      first_name: PropTypes.string,
      last_name: PropTypes.string,
    }),
    
    // actions
    toggleEditMode: PropTypes.func.isRequired,
    getProfile: PropTypes.func.isRequired,
    changeFormValue: PropTypes.func.isRequired,

    // module states 
    isUpdatingMyProfile: PropTypes.bool.isRequired,

    // module actions
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
    // states
    ...state.profileScene,

    // module states
    isUpdatingMyProfile: state.me.isUpdatingMyProfile,
  };
}

export default connect(
  mapStateToProps,
  {
    // actions
    getProfile,
    toggleEditMode,
    changeFormValue,

    // module actions
    updateMyProfile,
  }
)(ProfileContainer);
