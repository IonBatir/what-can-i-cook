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
import { Constants } from "expo";
import { registerUser } from "../redux/actions/userActions";
import { LOGIN_SCREEN, DASHBOARD_SCREEN } from "../consts";
import { ScrollView } from "react-native";

export default connect(
  ({ user }) => user,
  { registerUser }
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
      const { registerUser, navigation, user } = this.props;
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
              Let's cook faster!)
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
