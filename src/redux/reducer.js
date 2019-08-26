import { combineReducers } from 'redux';

import app from '../modules/AppState';
import auth from '../modules/auth/AuthState';
import signup from '../modules/signup/SignupState';
import status from '../modules/status/StatusState';

export default combineReducers({
  app,
  auth,
  signup,
  status
});
