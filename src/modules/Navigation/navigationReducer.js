import { CHANGE_SCENE } from './navigationActions';
import { SCENES } from '../../../routes';

const initialState = {
  scene: SCENES.login,
};

export default function app(state = initialState, action) {
  switch (action.type) {
    case CHANGE_SCENE:
      const { scene } = action;
      return {
        ...state,
        scene,
      };
    default:
      // nothing to do
      return state;
  }
}
