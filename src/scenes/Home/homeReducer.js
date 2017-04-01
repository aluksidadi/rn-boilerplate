import {
  HOME_MODAL_OPEN,
  HOME_MODAL_CLOSE,
} from './homeActions';

const initialState = {
  isHomeModalOpen: false,
};

export default function homeScene(state = initialState, action) {
  switch (action.type) {
    case HOME_MODAL_OPEN:
      const { component } = action;
      return {
        ...state,
        isHomeModalOpen: true,
      };
    case HOME_MODAL_CLOSE:
      return {
        ...state,
        isHomeModalOpen: false,
      };
    default:
      // nothing to do
      return state;
  }
}
