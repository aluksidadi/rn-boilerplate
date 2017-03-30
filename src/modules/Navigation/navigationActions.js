import { Actions, ActionConst } from 'react-native-router-flux';

export const NAVIGATION_CHANGE_SCENE = 'NAVIGATION_CHANGE_SCENE';

export const changeScene = (scene, type = ActionConst.PUSH) => {
  return (dispatch, getState) => {
    dispatch({
      type: NAVIGATION_CHANGE_SCENE,
      scene
    });

    Actions[scene]({type});
  };
};