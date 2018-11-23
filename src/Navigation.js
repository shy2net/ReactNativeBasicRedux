import { AppNavigator } from "./reducers/NavReducer";
import { reduxifyNavigator } from "react-navigation-redux-helpers";
import { connect } from "react-redux";
import { createReactNavigationReduxMiddleware } from "react-navigation-redux-helpers";

export const NavMiddleware = createReactNavigationReduxMiddleware(
  "root",
  state => state.nav
);
const NavApp = reduxifyNavigator(AppNavigator, "root");
const mapStateToProps = state => ({
  state: state.nav
});

export const AppWithNavigationState = connect(mapStateToProps)(NavApp);
