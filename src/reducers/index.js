import { combineReducers } from 'redux';
import NavReducer from './NavReducer';
import AppReducer from './AppReducer';

export default combineReducers({
  app: AppReducer,
  nav: NavReducer
});
