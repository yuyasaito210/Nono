import { combineReducers } from 'redux';

import app from '../modules/AppState';
import login from '../modules/login/LoginState';
import signup from '../modules/signup/SignupState';
import status from '../modules/status/StatusState';

export default combineReducers({
  app,
  login,
  signup,
  status
});
