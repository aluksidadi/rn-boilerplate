export const LOGIN_SCENE_CHANGE_FORM_VALUE = 'LOGIN_SCENE_CHANGE_FORM_VALUE';

export const changeFormValue = (name, value) => ({
  type: LOGIN_SCENE_CHANGE_FORM_VALUE,
  name,
  value,
});