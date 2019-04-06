import React, { Component } from "react";
import { Container, Button, Text, Form, H1 } from "native-base";
import { connect } from "react-redux";
import { Constants } from "expo";
import { Spinner, TextInput } from "../components";
import { registerUser } from "../redux/actions/userActions";
import { LOGIN_SCREEN, DASHBOARD_SCREEN, EMAIL_REGEX } from "../consts";
import { ScrollView } from "react-native";

export default connect(
  user => user,
  { registerUser }
)(
  class extends Component {
    constructor(props) {
      super(props);
      this.state = {
        firstTime: true,
        email: "",
        password: "",
        error: {
          email: false,
          password: false
        }
      };
    }

    render() {
      const { registerUser, navigation, user } = this.props;
      const { email, password, firstTime, error } = this.state;

      if (!firstTime) {
        error.email = !EMAIL_REGEX.test(email);
        error.password = password.length < 6;
      }

      return user.register.loading ? (
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
              Let's cook faster!)
            </H1>

            <Form>
              <TextInput
                error={error.email}
                label={"Email"}
                value={email}
                onChangeText={text =>
                  this.setState({
                    email: text
                  })
                }
              />
              <TextInput
                error={error.password}
                label={"Password"}
                value={password}
                secureTextEntry
                onChangeText={text =>
                  this.setState({
                    password: text
                  })
                }
              />
            </Form>

            <Button
              block
              disabled={error.email || error.password}
              onPress={() => {
                this.setState({ firstTime: false });
                registerUser(
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
              <Text>Register</Text>
            </Button>
            <Text style={{ margin: 10, alignItems: "center" }}>
              {user.register.error && `${user.register.error}`}
            </Text>
            <Text
              style={{ textAlign: "center", marginTop: 10 }}
            >{`Have an account?`}</Text>
            <Button
              style={{
                flex: 1,
                justifyContent: "flex-end",
                marginBottom: 36,
                alignSelf: "center"
              }}
              onPress={() => navigation.navigate(LOGIN_SCREEN)}
              transparent
            >
              <Text style={{ textAlign: "center" }}>Back to login</Text>
            </Button>
          </ScrollView>
        </Container>
      );
    }
  }
);
