// import * as meApi from '../../api/meApi.js';
import * as meApi from '../../api/meMock.js';
import * as appActions from '../app/appActions';

export const ME_GET = 'ME_GET';
export const ME_GET_SUCCESS = 'ME_GET_SUCCESS';
export const ME_GET_ERROR = 'ME_GET_ERROR';

const _getMe = () => ({
  type: ME_GET,
});

const _getMeSuccess = (me) => ({
  type: ME_GET_SUCCESS,
  me,
});

const _getMeError = (error) => ({
  type: ME_GET_ERROR,
  error,
});

export const getMe = () => {
  return (dispatch, getState) => {
    const { token } = getState().app;
    dispatch(_getMe());

    // return meApi.getUnauthorized(token) // to test invalid session
    return meApi.get(token)
      .then((resp) => dispatch(appActions.processApiResponse(resp)))
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