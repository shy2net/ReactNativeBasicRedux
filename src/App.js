import React from 'react';
import {
  createStore,
  applyMiddleware,
} from 'redux';
import {
  reduxifyNavigator,
  createReactNavigationReduxMiddleware,
} from 'react-navigation-redux-helpers';
import { Provider, connect } from 'react-redux';
import appReducer from './reducers';
import { AppNavigator } from './reducers/NavReducer';


const middleware = createReactNavigationReduxMiddleware(
  "root",
  state => state.nav,
);

const App = reduxifyNavigator(AppNavigator, "root");
const mapStateToProps = (state) => ({
  state: state.nav,
});
const AppWithNavigationState = connect(mapStateToProps)(App);

const store = createStore(
  appReducer,
  applyMiddleware(middleware),
);

const AppA = () => (
  <Provider store={store}>
    <AppWithNavigationState />
  </Provider>
);

export default AppA;
