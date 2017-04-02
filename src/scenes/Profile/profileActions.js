// import * as meApi from '../../api/meApi.js';
import * as meApi from '../../api/meMock.js';
import * as appActions from '../../modules/app/appActions';
import * as meActions from '../../modules/me/meActions';

export const PROFILE_SCENE_GET = 'PROFILE_SCENE_GET';
export const PROFILE_SCENE_GET_SUCCESS = 'PROFILE_SCENE_GET_SUCCESS';
export const PROFILE_SCENE_GET_ERROR = 'PROFILE_SCENE_GET_ERROR';
export const PROFILE_SCENE_SAVE = 'PROFILE_SCENE_SAVE';
export const PROFILE_SCENE_SAVE_SUCCESS = 'PROFILE_SCENE_SAVE_SUCCESS';
export const PROFILE_SCENE_SAVE_ERROR = 'PROFILE_SCENE_SAVE_ERROR';
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

const _saveProfile = () => ({
  type: PROFILE_SCENE_SAVE,
});

const _saveProfileSuccess = (user) => ({
  type: PROFILE_SCENE_SAVE_SUCCESS,
  user,
});

const _saveProfileError = (error) => ({
  type: PROFILE_SCENE_SAVE_ERROR,
  error,
});

export const saveProfile = () => {
  return (dispatch, getState) => {
    const {token} = getState().app;
    const {me} = getState().me;
    const {user, form} = getState().profileScene;

    const profile = {
      ...user.profile,
      first_name: form.firstName,
      last_name: form.lastName,
    };

    if (user.id === me.id) {
      dispatch(_saveProfile());
      
      return meApi.updateMyProfile(token, profile)
        .then((resp) => dispatch(appActions.processApiResponse(resp)))
        .then(
          (resp) => {
            const {me} = resp.data;
            dispatch(_saveProfileSuccess(me));
            dispatch(meActions.setMe(me));
            return resp;
          }
        )
        .catch((error) => {
          dispatch(_saveProfileError(error));
          return error;
        });

      return promise;
    } else {
      alert('Not Implemented');
      
      // dispatch(_getProfile());
      // 
      // return usersApi.updateProfileById(token, id, profile)
      //   .then((resp) => dispatch(appActions.processApiResponse(resp)))
      //   .then(
      //     (resp) => {
      //       const {user} = resp.data;
      //       dispatch(_getProfileSuccess(user));
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
}