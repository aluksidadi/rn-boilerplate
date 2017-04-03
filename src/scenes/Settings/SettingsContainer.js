import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';

// components
import Settings from './components/Settings';
import {SpinnerOverlay} from '../../components'
import OpenDrawerButtonContainer from '../../modules/navigation/OpenDrawerButtonContainer';
import NavBar from '../../modules/navigation/components/NavBar';

// actions
import {getSettings, changeFormValue} from './settingsActions';

// module actions
import {updateMySettings} from '../../modules/me/meActions';

// styles
import commonStyles from '../../styles/common';

// i18n
import {t} from '../../i18n';
import dictionary from './dictionary';

class SettingsContainer extends Component {
  static propTypes = {
    // states
    form: PropTypes.shape({
      locale: PropTypes.string,
      is_push_notification_on: PropTypes.bool,
    }),
    
    // actions
    getSettings: PropTypes.func.isRequired,
    changeFormValue: PropTypes.func.isRequired,

    // module states 
    isUpdatingMySettings: PropTypes.bool.isRequired,

    // module actions
    updateMySettings: PropTypes.func.isRequired,
  };

  static renderNavigationBar = (props) => {
    return (
      <NavBar
        title={t(dictionary.settings)}
        leftButton={<OpenDrawerButtonContainer />} />
    );
  };

  componentDidMount() {
    this.props.getSettings()
  }

  render() {
    return <Settings {...this.props} />
  }
}

function mapStateToProps(state) {
  return {
    // states
    ...state.settingsScene,

    // module states
    isUpdatingMySettings: state.me.isUpdatingMySettings,
  };
}

export default connect(
  mapStateToProps,
  {
    // actions
    getSettings,
    changeFormValue,

    // module actions
    updateMySettings,
  }
)(SettingsContainer);
