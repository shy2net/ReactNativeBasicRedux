import React from "react";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import appReducer from "./reducers";
import { AppWithNavigationState, NavMiddleware } from "./Navigation";

const store = createStore(appReducer, applyMiddleware(NavMiddleware));

const App = () => (
  <Provider store={store}>
    <AppWithNavigationState />
  </Provider>
);

export default App;
