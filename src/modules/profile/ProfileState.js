import * as types from '../../constants/ActionTypes'
import { Firebase, FirebaseRef } from '../../lib/firebase';
import { statusMessage } from '../status/StatusState';

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

///////////////////////////////////////////
// Reducer state
const initialState = {
  isFetching: false,
  profile: false,
  errorMessage: false,
};

export default function rentButteryReducer(state = initialState, action) {
  switch(action.type) {
    case types.GET_PROFILE.REQUEST:
      return Object.assign({}, state, {
        isFetching: true,
        profile: action.profile || state.profile,
        errorMessage: false,
      });
    case types.GET_PROFILE.SUCCESS:
      return Object.assign({}, state, {
        isFetching: false,
        isAuthenticated: true,
        profile: action.profile || state.profile,
        errorMessage: false,
      });
    case types.GET_PROFILE.FAILURE:
      return Object.assign({}, state, {
        isFetching: false,
        isAuthenticated: false,
        errorMessage: action.err,
      });
    case types.GET_PROFILE.INIT:
      return Object.assign({}, state, {
        isAuthenticated: false,
        isFetching: false,
        profile: false,
        errorMessage: false,
      });
    /////////////////////////////////////////////
    // Set profile
    case types.SET_PROFILE.REQUEST:
      return Object.assign({}, state, {
        isFetching: true,
        profile: action.profile,
        errorMessage: false,
      });
    case types.SET_PROFILE.SUCCESS:
      return Object.assign({}, state, {
        isFetching: false,
        isAuthenticated: true,
        profile: action.profile || state.profile,
        errorMessage: false,
      });
    case types.SET_PROFILE.FAILURE:
      return Object.assign({}, state, {
        isFetching: false,
        isAuthenticated: false,
        errorMessage: action.err,
      });
    case types.SET_PROFILE.INIT:
      return Object.assign({}, state, {
        isAuthenticated: false,
        isFetching: false,
        profile: false,
        errorMessage: false,
      });
    default:
      return state;
  }
}