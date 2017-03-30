import {
  LOGIN_SCENE_CHANGE_FORM_VALUE,
  LOGIN_SCENE_LOGIN,
  LOGIN_SCENE_LOGIN_SUCCESS,
  LOGIN_SCENE_LOGIN_ERROR,
} from './loginActions';

const initialState = {
  form: {
    username: '',
    password: '',
  },
  isLogging: false,
  error: false
};

export default function loginScene(state = initialState, action) {
  switch (action.type) {
    case LOGIN_SCENE_CHANGE_FORM_VALUE:
      const { name, value } = action;
      return {
        ...state,
        form: {
          ...state.form,
          [name]: value,
        },
      };
    case LOGIN_SCENE_LOGIN:
      return {
        ...state,
        isLogging: true,
        errorLogin: false
      };
    case LOGIN_SCENE_LOGIN_SUCCESS:
      return {
        ...state,
        form: {
          username: '',
          password: '',
        },
        isLogging: false,
      };
    case LOGIN_SCENE_LOGIN_ERROR:
      const { error } = action;
      return {
        ...state,
        error,
        isLogging: false
      };
    default:
      // nothing to do
      return state;
  }
}
