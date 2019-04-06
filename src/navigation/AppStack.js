import React from "react";
import { createBottomTabNavigator } from "react-navigation";
import { Dashboard, Food, Recipe } from "../screens";
import { DASHBOARD_SCREEN, FOOD_SCREEN, RECIPE_SCREEN } from "../consts";
import { Icon } from "native-base";

export default createBottomTabNavigator(
  {
    [DASHBOARD_SCREEN]: {
      screen: Dashboard,
      navigationOptions: {
        tabBarLabel: "Dashboard",
        tabBarIcon: ({ tintColor }) => (
          <Icon name="home" size={25} color="#900" />
        )
      }
    },
    [FOOD_SCREEN]: {
      screen: Food,
      navigationOptions: {
        tabBarLabel: "Food",
        tabBarIcon: ({ tintColor }) => (
          <Icon
            name="food-apple"
            type="MaterialCommunityIcons"
            size={25}
            color="#900"
          />
        )
      }
    },
    [RECIPE_SCREEN]: {
      screen: Recipe,
      navigationOptions: {
        tabBarLabel: "Recipe",
        tabBarIcon: ({ tintColor }) => (
          <Icon
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
