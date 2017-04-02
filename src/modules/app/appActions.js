// import * as meApi from '../../api/meApi.js';
import * as meApi from '../../api/meMock.js';
import * as authActions from '../../modules/auth/authActions';
import {SCENES} from '../../routes';
import * as colors from '../../styles/colors';
import Snackbar from 'react-native-snackbar';
import dictionary from './dictionary';
import {t} from '../../i18n';

export const APP_ON_ERROR = 'APP_ON_ERROR';
export const APP_ON_MESSAGE = 'APP_ON_MESSAGE';
export const APP_GET_ME = 'APP_GET_ME';
export const APP_GET_ME_SUCCESS = 'APP_GET_ME_SUCCESS';
export const APP_GET_ME_ERROR = 'APP_GET_ME_ERROR';
export const APP_GET_LAST_SESSION = 'APP_GET_LAST_SESSION';
export const APP_PROCESS_HTTP_RESPONSE = 'APP_PROCESS_HTTP_RESPONSE';

const _getMe = () => ({
  type: APP_GET_ME,
});

const _getMeSuccess = (me) => ({
  type: APP_GET_ME_SUCCESS,
  me,
});

const _getMeError = (error) => ({
  type: APP_GET_ME_ERROR,
  error,
});

export const getMe = () => {
  return (dispatch, getState) => {
    const { token } = getState().app;
    dispatch(_getMe());

    // return meApi.getUnauthorized(token) // to test invalid session
    return meApi.get(token)
      .then((resp) => dispatch(processApiResponse(resp)))
      .then(
        (resp) => {
          const { me } = resp.data;
          dispatch(_getMeSuccess(me));
          return resp;
        }
      )
      .catch((error) => {
        dispatch(_getMeError(error));
        return error;
      });

    return promise;
  };
};

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