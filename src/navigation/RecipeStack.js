import { createStackNavigator } from "react-navigation";
import { Recipe, RecipeInfo, AddRecipe } from "../screens";
import {
  RECIPE_SCREEN,
  RECIPE_INFO_SCREEN,
  ADD_RECIPE_SCREEN
} from "../consts";

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
    },
    [ADD_RECIPE_SCREEN]: {
      screen: AddRecipe,
      navigationOptions: {
        title: "Add Recipe"
      }
    }
  },
  {
    initialRouteName: RECIPE_SCREEN
  }
);
