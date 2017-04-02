import {combineReducers} from 'redux';
import loginScene from '../scenes/Login/loginReducer';
import homeScene from '../scenes/Home/homeReducer';
import auth from '../modules/auth/authReducer';
import app from '../modules/app/appReducer';
import navigation from '../modules/navigation/navigationReducer';

export default combineReducers({
  auth,
  app,
  loginScene,
  homeScene,
  navigation,
});
