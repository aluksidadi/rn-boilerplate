import { combineReducers } from 'redux';
import { routerReducer as router } from 'react-native-redux-router';
import loginScene from '../scenes/Login/loginReducer';
import homeScene from '../scenes/Home/homeReducer';
// import app from '../modules/App/appReducer';

export default combineReducers({
  router,
  loginScene,
  homeScene,
  // app,
});
