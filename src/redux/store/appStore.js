import reducers from '../reducers'
import { createLogger } from 'redux-logger'
import { applyMiddleware, compose, createStore } from 'redux';
import thunk from 'redux-thunk';

const middleware = [thunk];

const __DEV__ = process.env.NODE_ENV === 'development';

if (__DEV__) {
  middleware.push(createLogger())
}

const composeEnhancers =
  __DEV__ &&
  typeof window === 'object' &&
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
    : compose;

const enhancer = composeEnhancers(applyMiddleware(...middleware));
const store = createStore(reducers, enhancer);

export default store;
