// action types
import {
  LOGIN_SCENE_CHANGE_FORM_VALUE,
} from './loginActions';

// module action types
import {
  AUTH_LOGIN_SUCCESS,
} from '../../modules/auth/authActions';

const initialState = {
  form: {
    username: '',
    password: '',
  },
};

export default function loginScene(state = initialState, action) {
  switch (action.type) {
    case LOGIN_SCENE_CHANGE_FORM_VALUE: {
      const {name, value} = action;
      return {
        ...state,
        form: {
          ...state.form,
          [name]: value,
        },
      };
    }
    case AUTH_LOGIN_SUCCESS: {
      return {
        ...state,
        form: {
          username: '',
          password: '',
        },
      };
    }
    default: {
      // nothing to do
      return state;
    }
  }
}
