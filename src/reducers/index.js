import { combineReducers, compose, createStore } from "redux";

import queries from "./queries";

const rootReducer = combineReducers({
  queries,
});

const composeEnhancers =
  (process.env.NODE_ENV === "development" &&
    window !== undefined &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
  compose;

const store = createStore(rootReducer, composeEnhancers());

export default store;
