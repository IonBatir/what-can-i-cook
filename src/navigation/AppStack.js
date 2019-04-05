import { createStackNavigator } from "react-navigation";
import { Dashboard } from "../screens";
import { DASHBOARD } from "../consts";

export default createStackNavigator(
  {
    [DASHBOARD]: {
      screen: Dashboard,
      navigationOptions: {
        title: "Dashboard"
      }
    }
  },
  {
    initialRouteName: DASHBOARD,
    headerMode: "screen"
  }
);
