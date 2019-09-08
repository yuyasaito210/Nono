import * as types from '../constants/ActionTypes';
import store from '../redux/store';
import translate from '../i18n';

export function setAppOpened(): ActionType {
  return {
    type: types.SET_FIRST_OPEN,
  };
}

export function setLanguage(language) {
  return {
    type: types.SET_LANGUAGE,
    language
  }
}

export function getLanguage() {
  return (dispatch, getState) => {
    language = getState().app.language;
    return language
  };
}

export function _t(message) {
  return (dispatch, getState) => {
    language = getState().app.language;
    return translate(message, language)
  };
}
