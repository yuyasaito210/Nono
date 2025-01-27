// import { applyMiddleware, createStore, compose } from 'redux';
// import { persistStore, persistReducer } from 'redux-persist';
// import storage from 'redux-persist/lib/storage';
// import thunkMiddleware from 'redux-thunk';
// import { createLogger } from 'redux-logger';
// import reducer from './reducer';

// const enhancers = [
//   applyMiddleware(
//     thunkMiddleware,
//     createLogger({
//       collapsed: true,
//       // eslint-disable-next-line no-undef
//       predicate: () => __DEV__,
//     }),
//   ),
// ];

// /* eslint-disable no-undef */
// const composeEnhancers =
//   (__DEV__ &&
//     typeof window !== 'undefined' &&
//     window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
//   compose;
// /* eslint-enable no-undef */

// const enhancer = composeEnhancers(...enhancers);

// const persistConfig = {
//   key: 'root',
//   storage,
//   blacklist: [],
// };

// const persistedReducer = persistReducer(persistConfig, reducer);
// export const store = createStore(persistedReducer, {}, enhancer);
// export const persistor = persistStore(store);

import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { createLogger } from 'redux-logger';
import thunkMiddleware from 'redux-thunk';
import * as storage from 'redux-storage';
import { persistStore, persistReducer } from 'redux-persist';
// import storage from 'redux-persist/lib/storage';
import reducer from './reducer';
import sagas from '../sagas';
import createEngine from 'redux-storage-engine-reactnativeasyncstorage';
import { composeWithDevTools } from 'redux-devtools-extension';

const isDebuggingInChrome = __DEV__ && !!window.navigator.userAgent;

export default function configureStore(onComplete) {

  const engine = createEngine('AppTree');
  const storeMiddleware = storage.createMiddleware(engine, [], );
  const sagaMiddleware = createSagaMiddleware();
  let middleware = [sagaMiddleware, thunkMiddleware, storeMiddleware];
  let store = null;
  if (process.env.NODE_ENV !== 'production') {
    const logger = createLogger({
      predicate: (getState, action) => isDebuggingInChrome,
      collapsed: true,
      duration: true,
      diff: true,
    });

    middleware = [
      ...middleware
    ]

    const composeEnhancers = composeWithDevTools({
      // Specify here name, actionsBlacklist, actionsCreators and other options if needed
    });

    store = createStore(
      storage.reducer(reducer),
      //Apply redux-storage so we can persist Redux state to disk
      composeEnhancers(
        applyMiddleware(
          ...middleware, logger
        ),
      )
    );
  } else {
    const composeEnhancers = compose;
    store = createStore(
      storage.reducer(reducer), //Apply redux-storage so we can persist Redux, state to disk
      composeEnhancers(
        applyMiddleware(
          ...middleware
        ),
      )
    );
  }


  if (isDebuggingInChrome) {
    window.store = store;
  }

  const load = storage.createLoader(engine);
  load(store)
    .then(onComplete)
    .catch(() => console.log('Failed to load previous state'));

  sagaMiddleware.run(sagas);

  return store;
}

