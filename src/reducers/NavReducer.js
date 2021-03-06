import {
  createStackNavigator,
} from 'react-navigation';

import {
  createNavigationReducer
} from 'react-navigation-redux-helpers';

import HomeScreen from '../components/HomeScreen';
import SecondScreen from '../components/SecondScreen';

export const AppNavigator = createStackNavigator({
  Home: HomeScreen,
  Second: SecondScreen
}, {
  initialRouteName: 'Home'
});

const navReducer = createNavigationReducer(AppNavigator);
export default navReducer;