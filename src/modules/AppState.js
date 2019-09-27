import * as types from '../constants/ActionTypes'

type AppStateType = {
  isFirstOpen: boolean,
  language: string,
};

type ActionType = {
  type: string,
  payload?: any,
};

export const initialState: AppStateType = {
  isFirstOpen: true,
  language: 'fr'
};

export default function AppStateReducer(
  state: AppStateType = initialState,
  action: ActionType,
): AppStateType {
  switch (action.type) {
    case types.SET_FIRST_OPEN:
      return {
        ...state,
        isFirstOpen: false,
      };
    case types.SET_LANGUAGE:
      return {
        ...state,
        language: action.language ? action.language : state.language
      };
    default:
      return state;
  }
}
