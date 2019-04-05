import { createSwitchNavigator } from "react-navigation";
import AppStack from "./AppStack";
import AuthStack from "./AuthStack";
import { APP_STACK, AUTH_STACK } from "../consts";

export default createSwitchNavigator(
  {
    [APP_STACK]: { screen: AppStack },
    [AUTH_STACK]: { screen: AuthStack }
  },
  {
    initialRouteName: AUTH_STACK
  }
);
