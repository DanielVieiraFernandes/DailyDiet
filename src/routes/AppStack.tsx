import {createStackNavigator} from '@react-navigation/stack';
import {Home} from '@screens/Home/Home';
import { MealDetails } from '@screens/MealDetails/MealDetails';
import { NewMeal } from '@screens/NewMeal/NewMeal';
import {StatisticsScreen} from '@screens/Statistics/StatisticsScreen';
import { Summary } from '@screens/Summary/Summary';

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
      <Screen name="NewMeal" component={NewMeal} />
      <Screen name="Summary" component={Summary} />
      <Screen name="MealDetails" component={MealDetails} />
    </Navigator>
  );
}
