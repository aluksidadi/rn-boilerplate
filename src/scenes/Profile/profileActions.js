// api
// import * as usersApi from '../../api/usersApi.js'; // uncomment this for real api
// import * as usersApi from '../../api/usersMock.js'; // mock api for testing

// module actions
import * as appActions from '../../modules/app/appActions';
import * as meActions from '../../modules/me/meActions';

// action types
export const PROFILE_SCENE_GET = 'PROFILE_SCENE_GET';
export const PROFILE_SCENE_GET_SUCCESS = 'PROFILE_SCENE_GET_SUCCESS';
export const PROFILE_SCENE_GET_ERROR = 'PROFILE_SCENE_GET_ERROR';
export const PROFILE_SCENE_CHANGE_FORM_VALUE = 'PROFILE_SCENE_CHANGE_FORM_VALUE';
export const PROFILE_SCENE_TOGGLE_EDIT_MODE = 'PROFILE_SCENE_TOGGLE_EDIT_MODE';

export const toggleEditMode = (isEditMode) => ({
  type: PROFILE_SCENE_TOGGLE_EDIT_MODE,
  isEditMode,
});

export const changeFormValue = (name, value) => ({
  type: PROFILE_SCENE_CHANGE_FORM_VALUE,
  name,
  value,
});

const _getProfile = () => ({
  type: PROFILE_SCENE_GET,
});

const _getProfileSuccess = (user, isEditable) => ({
  type: PROFILE_SCENE_GET_SUCCESS,
  user,
  isEditable,
});

const _getProfileError = (error) => ({
  type: PROFILE_SCENE_GET_ERROR,
  error,
});

export const getProfile = (id) => {
  return (dispatch, getState) => {
    const {token} = getState().app;
    const {me} = getState().me;

    if (!id || id === me.id) {
      dispatch(_getProfileSuccess(me, true));
    } else {
      alert('Not Implemented');
      
      // dispatch(_getProfile());
      // 
      // return usersApi.getById(token, id)
      //   .then((resp) => dispatch(appActions.processApiResponse(resp)))
      //   .then(
      //     (resp) => {
      //       const {user} = resp.data;
      //       dispatch(_getProfileSuccess(user, false));
      //       return resp;
      //     }
      //   )
      //   .catch((error) => {
      //     dispatch(_getProfileError(error));
      //     return error;
      //   });

      // return promise;
    }
  };
};