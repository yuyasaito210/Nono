import * as types from '../../constants/ActionTypes';
import { Firebase, FirebaseRef } from '../../lib/firebase';
import { statusMessage } from '../status/StatusState';
///////////////////////////////////////////////////////
// Actions

// Get profile
export function getProfileRequest() {
  return {
    type: types.GET_PROFILE.REQUEST
  }
}

export function getProfileInit() {
  return {
    type: types.GET_PROFILE.INIT
  }
}

export function getProfileSuccess(payload) {
  return {
    type: types.GET_PROFILE.SUCCESS,
    ...payload
  }
}

export function getProfileFailure(err) {
  return {
    type: types.GET_PROFILE.FAILURE,
    err
  }
}

/////////////////////////////////////////////////
// Set profile
export function setProfileRequest(profile) {
  return {
    type: types.SET_PROFILE.REQUEST,
    profile
  }
}

export function setProfileInit() {
  return {
    type: types.SET_PROFILE.INIT
  }
}

export function setProfileSuccess(payload) {
  return {
    type: types.SET_PROFILE.SUCCESS,
    ...payload
  }
}

export function setProfileFailure(err) {
  return {
    type: types.SET_PROFILE.FAILURE,
    err
  }
}


///////////////////////////////////////////
// Thunk
export const listenForProfileUpdates = () => {
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

export function actionGetProfile() {
  if (Firebase === null) return new Promise(resolve => resolve);
  // Ensure token is up to date
  return new Promise((resolve) => {
    Firebase.auth().onAuthStateChanged((loggedIn) => {
      if (loggedIn) {
        this.listenForProfileUpdates(dispatch);
        return resolve();
      }
      return new Promise(() => resolve);
    });
  });
}

export function actionSetProfile(profile) {
  if (Firebase === null) return new Promise(resolve => resolve);
  // Ensure token is up to date
  return new Promise((resolve) => {
    Firebase.auth().onAuthStateChanged((loggedIn) => {
      if (loggedIn) {
        this.listenForProfileUpdates(dispatch);
        return resolve();
      }
      return new Promise(() => resolve);
    });
  });
}
