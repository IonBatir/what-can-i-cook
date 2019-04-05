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
import { Constants } from "expo";
import { LOGIN_SCREEN } from "../consts";
import { ScrollView } from "react-native";

export default connect(
  ({ user }) => user,
  { resetPassword }
)(
  class extends Component {
    constructor(props) {
      super(props);
      this.state = {
        email: ""
      };
    }

    render() {
      const { navigation, user, resetPassword } = this.props;
      const { email } = this.state;
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
              Don't worry, Honey!
            </H1>

            <Form>
              <Item floatingLabel underline>
                <Label>Email</Label>
                <Input onChangeText={text => this.setState({ email: text })} />
              </Item>
            </Form>

            <Button
              block
              onPress={() => navigation.navigate(LOGIN_SCREEN)}
              style={{
                backgroundColor: "#5181b8",
                margin: 10,
                marginTop: 20
              }}
            >
              <Text>Reset</Text>
            </Button>

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
              onPress={() => {
                resetPassword(
                  { email },
                  () => navigation.navigate(LOGIN_SCREEN),
                  () => {}
                );
              }}
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
