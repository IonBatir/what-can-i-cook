import React, { Component } from "react";
import { connect } from "react-redux";
import { Container, Button, Text, Form, H1 } from "native-base";
import { Constants } from "expo";
import { login } from "../redux/actions/userActions";
import { Spinner, TextInput } from "../components";
import {
  REGISTER_SCREEN,
  APP_NAME,
  RESET_PASSWORD_SCREEN,
  DASHBOARD_SCREEN,
  EMAIL_REGEX
} from "../consts";
import { ScrollView } from "react-native";

export default connect(
  user => user,
  { login }
)(
  class extends Component {
    constructor(props) {
      super(props);
      this.state = {
        email: "",
        password: "",
        firstTime: true,
        error: {
          email: false,
          password: false
        }
      };
    }

    render() {
      const { navigation, login, user } = this.props;
      const { email, password, error, firstTime } = this.state;

      if (!firstTime) {
        error.email = !EMAIL_REGEX.test(email);
        error.password = password.length < 6;
      }

      return user.login.loading ? (
        <Spinner />
      ) : (
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
              <TextInput
                error={error.email}
                label={"Email"}
                value={email}
                onChangeText={text => this.setState({ email: text })}
              />
              <TextInput
                error={error.password}
                label={"Password"}
                value={password}
                onChangeText={text => this.setState({ password: text })}
                secureTextEntry
              />
            </Form>

            <Button
              block
              disabled={error.email || error.email}
              onPress={() => {
                this.setState({ firstTime: false });
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
            <Text style={{ margin: 10, alignItems: "center" }}>
              {user.login.error && `${user.login.error}`}
            </Text>
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
