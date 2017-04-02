import React, {PropTypes, Component} from 'react';
import Routes from '../../routes.js';
import {connect} from 'react-redux';
import {setLocale} from '../../i18n';

// import OneSignal from 'react-native-onesignal';

class AppContainer extends Component {
  static propTypes = {
    me: PropTypes.object,
    token: PropTypes.string,
    isFetchingMe: PropTypes.bool,
  };

  // componentWillMount() {
  //   OneSignal.addEventListener('received', this._oneSignalOnReceived);
  //   OneSignal.addEventListener('opened', this._oneSignalOnOpened);
  //   OneSignal.addEventListener('registered', this._oneSignalOnRegistered);
  //   OneSignal.addEventListener('ids', this._oneSignalOnIds);
  // }

  // componentWillUnmount() {
  //   OneSignal.removeEventListener('received', this._oneSignalOnReceived);
  //   OneSignal.removeEventListener('opened', this._oneSignalOnOpened);
  //   OneSignal.removeEventListener('registered', this._oneSignalOnRegistered);
  //   OneSignal.removeEventListener('ids', this._oneSignalOnIds);
  // }

  componentDidMount() {
    // this._oneSignalSetup(this.props);
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.me === null && nextProps.me) {
      // this._oneSignalSetup(this.props);
      setLocale(nextProps.me.locale);
    }
  }

  render() {
    return (
      <Routes />
    );
  }

  // _oneSignalSetup = (props) => {
  //   if (props.me) {
  //     OneSignal.sendTag("userId", props.me.id.toString());
  //   }
  // }

  // _oneSignalOnReceived = (notification) => {
  //   console.log("Notification received: ", notification);
  // }

  // _oneSignalOnOpened = (openResult) => {
  //   console.log('Message: ', openResult.notification.payload.body);
  //   console.log('Data: ', openResult.notification.payload.additionalData);
  //   console.log('isActive: ', openResult.notification.isAppInFocus);
  //   console.log('openResult: ', openResult);


  //   // @NOTE: notification example
  //   // {
  //   //     shown: true, // BOOLEAN: If the notification was displayed to the user or not
  //   //     payload: {notificationID : "", contentAvailable : false, badge : 1, sound : "default", title : "Hello!", body : "World", launchURL : "", }, // OBJECT; the push data
  //   //     displayType: 1, //The display method of a received notification
  //   //     silentNotification: false // BOOLEAN : Wether the received notification was a silent one
  //   // }

  //   const notification = openResult.notification;

  //   if (notification.payload.additionalData.hasOwnProperty('scene')) {
  //       const scene = notification.payload.additionalData.scene;
  //       this.props.changeScene(scene);
  //   }
  // }

  // _oneSignalOnRegistered = (notifData) => {
  //   console.log("Device had been registered for push notifications!", notifData);
  // }

  // _oneSignalOnIds = (device) => {
  //   console.log('Device info: ', device);
  // }
}

function mapStateToProps(state) {
  return {
    ...state.app,
  };
}

export default connect(
  mapStateToProps,
  {
  }
)(AppContainer);