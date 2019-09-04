import * as types from '../../constants/ActionTypes';
import { Actions } from 'react-native-router-flux';
import { Firebase, FirebaseRef } from '../../lib/firebase';
import { statusMessage } from '../status/StatusState';
///////////////////////////////////////////////////////
// Actions
export function getStoreRequest(region) {
  return {
    type: types.GET_STORE.REQUEST,
    region
  }
}

export function getStoreInit() {
  return {
    type: types.GET_STORE.INIT
  }
}

export function getStoreSuccess(payload) {
  return {
    type: types.GET_STORE.SUCCESS,
    ...payload
  }
}

export function getStoreFailure(err) {
  return {
    type: types.GET_STORE.FAILURE,
    err
  }
}

///////////////////////////////////////////
// Thunk
/**
 * Listen for realtime updates on the current user
 */
export const listenForStoreUpdates = () => {
  const UID = (
    FirebaseRef
    && Firebase
    && Firebase.auth()
    && Firebase.auth().currentUser
    && Firebase.auth().currentUser.uid
  ) ? Firebase.auth().currentUser.uid : null;

  if (!UID) return false;

  const ref = FirebaseRef.child(`users/${UID}`);

  return ref.on('value', (snapshot) => {
    const userData = snapshot.val() || [];
    console.log('===== userData: ', userData);
    // setUserDetails(userData); // Send to reducer
  });
};

export function actionGetMap(data) {
  if (Firebase === null) return new Promise(resolve => resolve);
  // Ensure token is up to date
  return new Promise((resolve) => {
    Firebase.auth().onAuthStateChanged((loggedIn) => {
      if (loggedIn) {
        this.listenForStoreUpdates(dispatch);
        return resolve();
      }
      return new Promise(() => resolve);
    });
  });
}

