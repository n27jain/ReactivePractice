import { createStackNavigator } from 'react-navigation';
import FriendsPage from './FriendsPage';

const AppNavigator = createStackNavigator({
  Friends: { screen: FriendsPage },
});

export default AppNavigator;