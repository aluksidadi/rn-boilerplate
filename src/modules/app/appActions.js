import * as authActions from '../auth/authActions';
import {SCENES} from '../../routes';
import * as colors from '../../styles/colors';
import Snackbar from 'react-native-snackbar';
import dictionary from './dictionary';
import {t} from '../../i18n';

export const APP_ON_ERROR = 'APP_ON_ERROR';
export const APP_ON_MESSAGE = 'APP_ON_MESSAGE';
export const APP_PROCESS_HTTP_RESPONSE = 'APP_PROCESS_HTTP_RESPONSE';

export const onError = (error) => {
  return (dispatch, getState) => {
    dispatch({
      type: APP_ON_ERROR,
      error,
    });
    Snackbar.show({
        backgroundColor: colors.ERROR,
        title: error,
        duration: Snackbar.LENGTH_LONG, // LENGTH_SHORT, LENGTH_LONG, LENGTH_INDEFINITE
        action: {
            title: 'DISMISS',
            color: colors.WHITE,
            onPress: () => {},
        },
    });
  };
}

export const onMessage = (message) => {
  return (dispatch, getState) => {
    dispatch({
      type: APP_ON_MESSAGE,
      message,
    });
    Snackbar.show({
        backgroundColor: colors.PRIMARY,
        title: message,
        duration: Snackbar.LENGTH_LONG, // LENGTH_SHORT, LENGTH_LONG, LENGTH_INDEFINITE
        action: {
            title: 'DISMISS',
            color: colors.WHITE,
            onPress: () => {},
        },
    });
  }
}

export const processApiResponse = (resp) => {
  return (dispatch, getState) => {
    dispatch({
      type: APP_PROCESS_HTTP_RESPONSE,
      resp,
    });

    if (resp.ok) {
      return resp.json();
    } else {
      switch (resp.status) {
        case 401:
          // unauthorized
          dispatch(onError(t(dictionary.sessionExpired)));
          return dispatch(authActions.logout());
          break;
        case 403:
        case 404:
        default:
          // any other non 2xx
          return new Promise((resolve, reject) => {
            resp
              .json()
              .then((error) => {
                const {code, message} = error;
                dispatch(onError(message));
                reject(message);
                return message;
              })
              .catch((error) => {
                reject(error);
                return error;
              });
          });
      }
    }
  }
}