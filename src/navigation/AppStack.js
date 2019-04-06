import { createBottomTabNavigator } from "react-navigation";
import { Dashboard, Food, Recipe } from "../screens";
import { DASHBOARD_SCREEN, FOOD_SCREEN, RECIPE_SCREEN } from "../consts";

export default createBottomTabNavigator(
  {
    [DASHBOARD_SCREEN]: {
      screen: Dashboard,
      navigationOptions: {
        tabBarLabel: "Dashboard"
      }
    },
    [FOOD_SCREEN]: {
      screen: Food,
      navigationOptions: {
        tabBarLabel: "Food"
      }
    },
    [RECIPE_SCREEN]: {
      screen: Recipe,
      navigationOptions: {
        tabBarLabel: "Recipe"
      }
    }
  },
  {
    navigationOptions: {},
    initialRouteName: DASHBOARD_SCREEN,
    animationEnabled: true
  }
);
