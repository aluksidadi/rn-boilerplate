// router actions
import {Actions, ActionConst} from 'react-native-router-flux';

// actiom types
export const NAVIGATION_BACK = 'NAVIGATION_BACK';
export const NAVIGATION_CHANGE_SCENE = 'NAVIGATION_CHANGE_SCENE';
export const NAVIGATION_ON_NAVIGATE = 'NAVIGATION_ON_NAVIGATE';
export const NAVIGATION_OPEN_DRAWER = 'NAVIGATION_OPEN_DRAWER';
export const NAVIGATION_CLOSE_DRAWER = 'NAVIGATION_CLOSE_DRAWER';

export const changeScene = (scene, params = {}, type = ActionConst.PUSH) => {
  return (dispatch, getState) => {
    dispatch({
      type: NAVIGATION_CHANGE_SCENE,
      scene
    });

    Actions[scene]({
      ...params,
      type
    });
  };
};

export const back = () => {
  return (dispatch, getState) => {
    dispatch({
      type: NAVIGATION_BACK,
    });

    Actions.pop();
  };
};

export const onNavigate = () => {
  return (dispatch, getState) => {
    // console.log('onNavigate', arguments);
    dispatch({
      type: NAVIGATION_ON_NAVIGATE,
    });
  };
};

export const openDrawer = () => {
  return (dispatch, getState) => {
    dispatch({
      type: NAVIGATION_OPEN_DRAWER,
    });
  };
};

export const closeDrawer = () => {
  return (dispatch, getState) => {
    dispatch({
      type: NAVIGATION_CLOSE_DRAWER,
    });
  };
};