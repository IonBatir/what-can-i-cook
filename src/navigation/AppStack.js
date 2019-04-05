import { createStackNavigator } from "react-navigation";
import { Dashboard } from "../screens";
import { DASHBOARD, DASHBOARD_SCREEN } from "../consts";

export default createStackNavigator(
  {
    [DASHBOARD_SCREEN]: {
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
