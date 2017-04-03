// action types
import {
  SETTINGS_SCENE_CHANGE_FORM_VALUE,
  SETTINGS_SCENE_GET,
} from './settingsActions';

const initialState = {
  form: {
    locale: '',
    is_push_notification_on: undefined,
  },
};

export default function settingsScene(state = initialState, action) {
  switch (action.type) {
    case SETTINGS_SCENE_CHANGE_FORM_VALUE: {
      const {name, value} = action;
      return {
        ...state,
        form: {
          ...state.form,
          [name]: value,
        },
      };
    }
    case SETTINGS_SCENE_GET: {
      const {settings} = action;
      return {
        ...state,
        form: {
          ...settings,
        },
      };
    }
    default: {
      // nothing to do
      return state;
    }
  }
}
