import { createStackNavigator } from "react-navigation";
import { Dashboard, RecipeInfo } from "../screens";
import { DASHBOARD_SCREEN, RECIPE_INFO_SCREEN } from "../consts";

export default createStackNavigator(
  {
    [DASHBOARD_SCREEN]: {
      screen: Dashboard,
      navigationOptions: {
        title: "DashBoard"
      }
    },
    [RECIPE_INFO_SCREEN]: {
      screen: RecipeInfo,
      navigationOptions: {
        title: "Recipe Information"
      }
    }
  },
  {
    initialRouteName: DASHBOARD_SCREEN
  }
);
