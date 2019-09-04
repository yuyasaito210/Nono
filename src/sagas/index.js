import { fork } from 'redux-saga/effects'
import login from './login';

// Consider using takeEvery
export default function* root() {
  // yield fork(init);
  yield fork(login);
	// yield fork(register);
}
