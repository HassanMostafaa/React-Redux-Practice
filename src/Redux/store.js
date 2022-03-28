import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import rootReducers from "./rootReducers";

export const store = createStore(
  rootReducers,
  composeWithDevTools(applyMiddleware())
);
