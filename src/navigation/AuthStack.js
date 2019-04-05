import { createStackNavigator } from "react-navigation";
import { Login, Register } from "../screens";
import { LOGIN_SCREEN, REGISTER_SCREEN } from "../consts";

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
    }
  },
  {
    initialRouteName: LOGIN_SCREEN,
    headerMode: "screen"
  }
);
