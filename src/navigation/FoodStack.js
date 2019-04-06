import { createStackNavigator } from "react-navigation";
import { Food, FoodInfo } from "../screens";
import { FOOD_SCREEN, FOOD_INFO_SCREEN } from "../consts";

export default createStackNavigator(
  {
    [FOOD_SCREEN]: {
      screen: Food,
      navigationOptions: {
        title: "Food"
      }
    },
    [FOOD_INFO_SCREEN]: {
      screen: FoodInfo,
      navigationOptions: {
        title: "Food Information"
      }
    }
  },
  {
    initialRouteName: FOOD_SCREEN
  }
);
