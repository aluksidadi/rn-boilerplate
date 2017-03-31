import {
  NAVIGATION_CHANGE_SCENE,
  NAVIGATION_OPEN_DRAWER,
  NAVIGATION_CLOSE_DRAWER,
  NAVIGATION_ON_NAVIGATE,
} from './navigationActions';
import { SCENES } from '../../routes';

const initialState = {
  scene: SCENES.splash.key,
  isDrawerOpen: false,
};

export default function app(state = initialState, action) {
  switch (action.type) {
    case NAVIGATION_CHANGE_SCENE:
      const { scene } = action;
      return {
        ...state,
        scene,
        isDrawerOpen: false,
      };
    case NAVIGATION_OPEN_DRAWER:
      return {
        ...state,
        isDrawerOpen: true,
      };
    case NAVIGATION_CLOSE_DRAWER:
      return {
        ...state,
        isDrawerOpen: false,
      };
    case NAVIGATION_ON_NAVIGATE:
      return {
        ...state,
        isDrawerOpen: false,
      };
    default:
      // nothing to do
      return state;
  }
}
