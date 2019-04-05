import { createStackNavigator } from "react-navigation";
import { Login, Register } from "../screens";
import {
  LOGIN_SCREEN,
  REGISTER_SCREEN,
  RESET_PASSWORD_SCREEN
} from "../consts";
import ResetPassword from "../screens/ResetPassword";

export default createStackNavigator(
  {
    [LOGIN_SCREEN]: {
      screen: Login,
      navigationOptions: {
        title: "Login"
      }
    },
    [REGISTER_SCREEN]: {
      screen: Register,
      navigationOptions: {
        title: "Register"
      }
    },
    [RESET_PASSWORD_SCREEN]: {
      screen: ResetPassword,
      navigationOptions: {
        title: "Reset Password"
      }
    }
  },
  {
    initialRouteName: LOGIN_SCREEN,
    headerMode: "screen"
  }
);
