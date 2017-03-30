import { combineReducers } from 'redux';
import { routerReducer as router } from 'react-native-redux-router';
import loginScene from '../scenes/Login/loginReducer';
// import app from '../modules/App/appReducer';

export default combineReducers({
  router,
  loginScene,
  // app,
});
