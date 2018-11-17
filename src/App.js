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

const NavApp = reduxifyNavigator(AppNavigator, "root");
const mapStateToProps = (state) => ({
  state: state.nav,
});
const AppWithNavigationState = connect(mapStateToProps)(NavApp);

const store = createStore(
  appReducer,
  applyMiddleware(middleware),
);

const App = () => (
  <Provider store={store}>
    <AppWithNavigationState />
  </Provider>
);

export default App;
