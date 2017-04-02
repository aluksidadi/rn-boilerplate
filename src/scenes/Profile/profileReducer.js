import {
  PROFILE_SCENE_CHANGE_FORM_VALUE,
  PROFILE_SCENE_TOGGLE_EDIT_MODE,
  PROFILE_SCENE_GET,
  PROFILE_SCENE_GET_SUCCESS,
  PROFILE_SCENE_GET_ERROR,
  PROFILE_SCENE_SAVE,
  PROFILE_SCENE_SAVE_SUCCESS,
  PROFILE_SCENE_SAVE_ERROR,
} from './profileActions';

const initialState = {
  user: null,
  isFetchingProfile: false,
  isSavingProfile: false,
  isEditable: false,
  form: {
    firstName: '',
    lastName: '',
  },
  isEditMode: false,
};

export default function profileScene(state = initialState, action) {
  switch (action.type) {
    case PROFILE_SCENE_CHANGE_FORM_VALUE: {
      const { name, value } = action;
      return {
        ...state,
        form: {
          ...state.form,
          [name]: value,
        },
      };
    }
    case PROFILE_SCENE_TOGGLE_EDIT_MODE: {
      const {isEditMode} = action;
      return {
        ...state,
        // reset form
        form: {
          firstName: state.user.profile.first_name,
          lastName: state.user.profile.last_name,
        },
        isEditMode,
      };
    }
    case PROFILE_SCENE_GET: {
      return {
        ...state,
        isFetchingProfile: true,
      };
    }
    case PROFILE_SCENE_GET_SUCCESS: {
      const {user, isEditable} = action;
      return {
        ...state,
        user,
        isEditable,
        isFetchingProfile: false,
      };
    }
    case PROFILE_SCENE_GET_ERROR: {
      return {
        ...state,
        isFetchingProfile: false,
      };
    }
    case PROFILE_SCENE_SAVE: {
      return {
        ...state,
        isSavingProfile: true,
      };
    }
    case PROFILE_SCENE_SAVE_SUCCESS: {
      const {user} = action;
      return {
        ...state,
        user,
        isSavingProfile: false,
        isEditMode: false,
      };
    }
    case PROFILE_SCENE_SAVE_ERROR: {
      return {
        ...state,
        isSavingProfile: false,
      };
    }
    default: {
      // nothing to do
      return state;
    }
  }
}
