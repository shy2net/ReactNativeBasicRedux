import {
  createStackNavigator,
} from 'react-navigation';

import {
  createNavigationReducer
} from 'react-navigation-redux-helpers';

import HomeScreen from '../components/HomeScreen';

export const AppNavigator = createStackNavigator({
  Home: HomeScreen
}, {
  initialRouteName: 'Home'
});

const navReducer = createNavigationReducer(AppNavigator);
export default navReducer;