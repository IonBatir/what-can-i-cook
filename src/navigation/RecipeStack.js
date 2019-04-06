import { createStackNavigator } from "react-navigation";
import { Recipe, RecipeInfo } from "../screens";
import { RECIPE_SCREEN, RECIPE_INFO_SCREEN } from "../consts";

export default createStackNavigator(
  {
    [RECIPE_SCREEN]: {
      screen: Recipe,
      navigationOptions: {
        title: "Recipe"
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
    initialRouteName: RECIPE_SCREEN
  }
);
