import {createStackNavigator} from '@react-navigation/stack';
import { EditMeal } from '@screens/EditMeal/EditMeal';
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
        animation: "slide_from_right",
      }}>
      <Screen name="Home" component={Home} options={{
        animation: "slide_from_left"
      }} />
      <Screen name="StatisticsScreen" component={StatisticsScreen} />
      <Screen name="NewMeal" component={NewMeal} />
      <Screen name="Summary" component={Summary} />
      <Screen name="MealDetails" component={MealDetails} />
      <Screen name="EditMeal" component={EditMeal} />
    </Navigator>
  );
}
