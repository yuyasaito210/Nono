import * as types from '../../constants/ActionTypes'
import { Firebase, FirebaseRef } from '../../lib/firebase';
import { statusMessage } from '../status/StatusState';
import * as rentButteryActions from './RentButteryAction';

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

///////////////////////////////////////////
// Reducer state
const initialState = {
  isFetching: false,
  batteries: false,
  selectedButtery: false,
  errorMessage: false,
};

export default function rentButteryReducer(state = initialState, action) {
  switch(action.type) {
    case types.RENT_BUTTERY.REQUEST:
      return Object.assign({}, state, {
        isFetching: true,
        selectedButtery: action.selectedButtery || state.selectedButtery,
        failure: false,
        errorMessage: false,
      });
    case types.RENT_BUTTERY.SUCCESS:
      return Object.assign({}, state, {
        isFetching: false,
        isAuthenticated: true,
        failure: false,
        selectedButtery: action.selectedButtery || state.selectedButtery,
      });
    case types.RENT_BUTTERY.FAILURE:
      return Object.assign({}, state, {
        isFetching: false,
        isAuthenticated: false,
        failure: true,
        errorMessage: action.err,
      });
    case types.RENT_BUTTERY.INIT:
      return Object.assign({}, state, {
        isAuthenticated: false,
        isFetching: false,
        batteries: false,
        selectedButtery: false,
        failure: false,
        errorMessage: false,
      });

    default:
      return state;
  }
}