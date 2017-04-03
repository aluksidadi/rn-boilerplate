// module actions
import * as appActions from '../../modules/app/appActions';
import * as meActions from '../../modules/me/meActions';

// action types
export const SETTINGS_SCENE_CHANGE_FORM_VALUE = 'SETTINGS_SCENE_CHANGE_FORM_VALUE';
export const SETTINGS_SCENE_GET = 'SETTINGS_SCENE_GET';
export const SETTINGS_SCENE_GET_SUCCESS = 'SETTINGS_SCENE_GET_SUCCESS';
export const SETTINGS_SCENE_GET_ERROR = 'SETTINGS_SCENE_GET_ERROR';

export const changeFormValue = (name, value) => ({
  type: SETTINGS_SCENE_CHANGE_FORM_VALUE,
  name,
  value,
});

export const getSettings = () => {
  return (dispatch, getState) => {
    const {me} = getState().me;

    dispatch({
      type: SETTINGS_SCENE_GET,
      settings: me.settings,
    });
  };
};