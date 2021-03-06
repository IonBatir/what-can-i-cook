import React, { Component } from "react";
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
import { connect } from "react-redux";
import { resetPassword } from "../redux/actions/userActions";
import { LOGIN_SCREEN, EMAIL_REGEX } from "../consts";
import { Spinner, TextInput } from "../components";
import { ScrollView } from "react-native";

export default connect(
  user => user,
  { resetPassword }
)(
  class extends Component {
    constructor(props) {
      super(props);
      this.state = {
        firstTime: true,
        email: "",
        error: {
          email: false
        }
      };
    }

    render() {
      const { navigation, user, resetPassword } = this.props;
      const { email, firstTime, error } = this.state;

      if (!firstTime) error.email = !EMAIL_REGEX.test(email);

      return user.resetPassword.loading ? (
        <Spinner />
      ) : (
        <Container>
          <ScrollView>
            <H1
              style={{
                textAlign: "center",
                marginTop: 50,
                marginBottom: 50
              }}
            >
              Don't worry, Honey!
            </H1>

            <Form>
              <TextInput
                label={"Email"}
                error={error.email}
                value={email}
                onChangeText={text => this.setState({ email: text })}
              />
            </Form>

            <Button
              block
              disabled={error.email}
              onPress={() => {
                this.setState({ firstTime: false });
                resetPassword(
                  { email },
                  () => navigation.navigate(LOGIN_SCREEN),
                  () => {}
                );
              }}
              style={{
                backgroundColor: "#5181b8",
                margin: 10,
                marginTop: 20
              }}
            >
              <Text>Reset</Text>
            </Button>
            <Text style={{ margin: 10, textAlign: "center" }}>
              {user.resetPassword.error && `${user.resetPassword.error}`}
            </Text>
            <Text
              style={{ textAlign: "center", marginTop: 10 }}
            >{`Remembered?`}</Text>
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
              <Text style={{ textAlign: "center" }}>Go Back!</Text>
            </Button>
          </ScrollView>
        </Container>
      );
    }
  }
);
