import { combineReducers } from 'redux';
import loginScene from '../scenes/Login/loginReducer';
import homeScene from '../scenes/Home/homeReducer';
import app from '../modules/App/appReducer';
import navigation from '../modules/Navigation/navigationReducer';

export default combineReducers({
  app,
  loginScene,
  homeScene,
  navigation,
});
