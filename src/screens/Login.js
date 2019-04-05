import React, { Component } from "react";
import { connect } from "react-redux";
import {
  Container,
  Button,
  Text,
  Form,
  Item,
  Input,
  Label,
  H1
} from "native-base";
import { Constants } from "expo";
import { login } from "../redux/actions/userActions";
import {
  REGISTER_SCREEN,
  APP_NAME,
  RESET_PASSWORD_SCREEN,
  DASHBOARD_SCREEN
} from "../consts";
import { ScrollView } from "react-native";

export default connect(
  ({ user }) => user,
  { login }
)(
  class extends Component {
    constructor(props) {
      super(props);
      this.state = {
        email: "",
        password: ""
      };
    }

    render() {
      const { navigation, login, user } = this.props;
      const { email, password } = this.state;
      return (
        <Container style={{ paddingTop: Constants.statusBarHeight }}>
          <ScrollView>
            <H1
              style={{
                textAlign: "center",
                marginTop: 50,
                marginBottom: 50
              }}
            >
              {APP_NAME}
            </H1>

            <Form>
              <Item floatingLabel underline>
                <Label>Email</Label>
                <Input onChangeText={text => this.setState({ email: text })} />
              </Item>
              <Item floatingLabel underline>
                <Label>Password</Label>
                <Input
                  onChangeText={text => this.setState({ password: text })}
                  secureTextEntry
                />
              </Item>
            </Form>

            <Button
              block
              onPress={() => {
                login(
                  { email, password },
                  () => navigation.navigate(DASHBOARD_SCREEN),
                  () => {}
                );
              }}
              style={{
                backgroundColor: "#5181b8",
                margin: 10,
                marginTop: 20
              }}
            >
              <Text>Sign In</Text>
            </Button>
            <Button
              style={{ alignSelf: "center" }}
              onPress={() => navigation.navigate(RESET_PASSWORD_SCREEN)}
              transparent
            >
              <Text style={{ textAlign: "center" }}>Forgot your password?</Text>
            </Button>
            <Text
              style={{ textAlign: "center", marginTop: 10 }}
            >{`Not registered yet to our app?`}</Text>
            <Button
              style={{
                flex: 1,
                justifyContent: "flex-end",
                marginBottom: 36,
                alignSelf: "center"
              }}
              onPress={() => navigation.navigate(REGISTER_SCREEN)}
              transparent
            >
              <Text style={{ textAlign: "center" }}>Register here</Text>
            </Button>
          </ScrollView>
        </Container>
      );
    }
  }
);
