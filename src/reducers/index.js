import {combineReducers} from 'redux';
import loginScene from '../scenes/Login/loginReducer';
import homeScene from '../scenes/Home/homeReducer';
import app from '../modules/app/appReducer';
import navigation from '../modules/navigation/navigationReducer';

export default combineReducers({
  app,
  loginScene,
  homeScene,
  navigation,
});
