import React from "react";
import { createBottomTabNavigator } from "react-navigation";
import DashboardStack from "./DashboardStack";
import FoodStack from "./FoodStack";
import RecipeStack from "./RecipeStack";
import { DASHBOARD_SCREEN, FOOD_SCREEN, RECIPE_SCREEN } from "../consts";
import { Icon } from "native-base";

export default createBottomTabNavigator(
  {
    [DASHBOARD_SCREEN]: {
      screen: DashboardStack,
      navigationOptions: {
        tabBarLabel: "Dashboard",
        tabBarIcon: ({ tintColor }) => (
          <Icon
            style={{ color: "#2b9e98" }}
            name="home"
            size={25}
            color="#900"
          />
        )
      }
    },
    [FOOD_SCREEN]: {
      screen: FoodStack,
      navigationOptions: {
        tabBarLabel: "Food",
        tabBarIcon: ({ tintColor }) => (
          <Icon
            style={{ color: "#2b9e98" }}
            name="food-apple"
            type="MaterialCommunityIcons"
            size={25}
            color="#900"
          />
        )
      }
    },
    [RECIPE_SCREEN]: {
      screen: RecipeStack,
      navigationOptions: {
        tabBarLabel: "Recipe",
        tabBarIcon: ({ tintColor }) => (
          <Icon
            style={{ color: "#2b9e98" }}
            name="food-variant"
            type="MaterialCommunityIcons"
            size={25}
            color="#900"
          />
        )
      }
    }
  },
  {
    navigationOptions: ({ navigation }) => ({
      tabBarOptions: {
        showIcon: true,
        activeTintColor: "white",
        inactiveTintColor: "gray",
        showLabel: true,
        style: {
          paddingTop: 5,
          elevation: 0
        }
      }
    }),
    initialRouteName: DASHBOARD_SCREEN,
    animationEnabled: true
  }
);
