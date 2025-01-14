import {createStackNavigator} from '@react-navigation/stack';
import {Home} from '@screens/Home/Home';
import {StatisticsScreen} from '@screens/Statistics/StatisticsScreen';

const {Navigator, Screen} = createStackNavigator();

export function AppStack() {
  return (
    <Navigator
      initialRouteName="Home"
      screenOptions={{
        headerShown: false,
      }}>
      <Screen name="Home" component={Home} />
      <Screen name="StatisticsScreen" component={StatisticsScreen} />
    </Navigator>
  );
}
