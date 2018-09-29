/**
 * @fileoverview Setup store for Redux
 */

import { createStore, applyMiddleware, compose } from "redux";
import { createLogger } from "redux-logger";
import thunk from "redux-thunk";
import rootReducer from "./reducers";

const enhancers = [];

const logger = createLogger({
  // ...options
  collapsed: true,
  duration: true
});

const middleware = [thunk, logger];

if (process.env.NODE_ENV === "development") {
  const devToolsExtension = window.__REDUX_DEVTOOLS_EXTENSION__;

  if (typeof devToolsExtension === "function") {
    enhancers.push(devToolsExtension());
  }
}

const composedEnhancers = compose(
  applyMiddleware(...middleware),
  ...enhancers
);

export default function configureStore(initialState = {}) {
  return createStore(rootReducer, composedEnhancers);
}
