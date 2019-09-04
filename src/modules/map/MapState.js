import * as types from '../../constants/ActionTypes'
import { Firebase, FirebaseRef } from '../../lib/firebase';
import { statusMessage } from '../status/StatusState';
import * as mapActions from './MapAction';

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

///////////////////////////////////////////
// Reducer state
const initialState = {
  isFetching: false,
  region: false,
  places: false,
  failure: false,
  errorMessage: false,
};

export default function mapReducer(state = initialState, action) {
  switch(action.type) {
    case types.GET_STORE.REQUEST:
      return Object.assign({}, state, {
        isFetching: true,
        region: action.region || state.region,
        places: action.region || state.region,
        failure: false,
        errorMessage: false,
      });
    case types.GET_STORE.SUCCESS:
      return Object.assign({}, state, {
        isFetching: false,
        isAuthenticated: true,
        failure: false,
        region: action.region || state.region,
        places: action.region || state.region,
				fromRegistration: false,
      });
    case types.GET_STORE.FAILURE:
      return Object.assign({}, state, {
        isFetching: false,
        isAuthenticated: false,
        failure: true,
        errorMessage: action.err,
        fromRegistration: false
      });
    case types.GET_STORE.INIT:
      return Object.assign({}, state, {
        isAuthenticated: false,
        isFetching: false,
        region: false,
        places: false,
        failure: false,
        errorMessage: false,
      });

    default:
      return state;
  }
}