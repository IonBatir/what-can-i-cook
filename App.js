import React, { Component } from "react";
import { YellowBox } from "react-native";
import { Root } from "native-base";
import { Font, AppLoading } from "expo";
import { createAppContainer } from "react-navigation";
import { Provider } from "react-redux";
import * as firebase from "firebase";
import Navigation from "./src/navigation";
import AppStore from "./src/redux/store";

const AppContainer = createAppContainer(Navigation);

export default class extends Component {
  constructor(props) {
    super(props);
    this.state = { loading: true };
  }
  async componentWillMount() {
    await Font.loadAsync({
      Roboto: require("native-base/Fonts/Roboto.ttf"),
      Roboto_medium: require("native-base/Fonts/Roboto_medium.ttf")
    });
    this.setState({ loading: false });
    YellowBox.ignoreWarnings(["Setting a timer", "Require cycle"]);
    YellowBox.disableYellowBox = true;
  }

  componentDidMount() {
    const firebaseConfig = {
      apiKey: "AIzaSyDYuCjxk55rVNJufSXeLl26tmgTybho1W8",
      authDomain: "what-can-i-cook-bcb81.firebaseapp.com",
      databaseURL: "https://what-can-i-cook-bcb81.firebaseio.com",
      projectId: "what-can-i-cook-bcb81",
      storageBucket: "what-can-i-cook-bcb81.appspot.com",
      messagingSenderId: "343997247660"
    };

    firebase.initializeApp(firebaseConfig);
  }
  render() {
    if (this.state.loading) {
      return (
        <Root>
          <AppLoading />
        </Root>
      );
    }
    return (
      <Provider store={AppStore}>
        <AppContainer />
      </Provider>
    );
  }
}
