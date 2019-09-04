import * as types from '../../constants/ActionTypes';
import { Firebase, FirebaseRef } from '../../lib/firebase';
import { statusMessage } from '../status/StatusState';

///////////////////////////////////////////////////////
// Actions
export function rentButteryRequest(battery) {
  return {
    type: types.RENT_BUTTERY.REQUEST,
    battery
  }
}

export function rentButteryInit() {
  return {
    type: types.RENT_BUTTERY.INIT
  }
}

export function rentButterySuccess(payload) {
  return {
    type: types.RENT_BUTTERY.SUCCESS,
    ...payload
  }
}

export function rentButteryFailure(err) {
  return {
    type: types.RENT_BUTTERY.FAILURE,
    err
  }
}

///////////////////////////////////////////
// Thunk
/**
 * Listen for realtime updates on the current user
 */
export const listenForButteryUpdates = () => {
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

export function actionGetButteries(store) {
  if (Firebase === null) return new Promise(resolve => resolve);
  // Ensure token is up to date
  return new Promise((resolve) => {
    Firebase.auth().onAuthStateChanged((loggedIn) => {
      if (loggedIn) {
        this.listenForButteryUpdates(dispatch);
        return resolve();
      }
      return new Promise(() => resolve);
    });
  });
}

export function actionSelectedButtery(selectedButtery) {
  if (Firebase === null) return new Promise(resolve => resolve);
  // Ensure token is up to date
  return new Promise((resolve) => {
    Firebase.auth().onAuthStateChanged((loggedIn) => {
      if (loggedIn) {
        this.listenForButteryUpdates(dispatch);
        return resolve();
      }
      return new Promise(() => resolve);
    });
  });
}
