import React, { Component } from "react";
import {
  Container,
  Header,
  Button,
  Text,
  Body,
  Form,
  Item,
  Input,
  Label,
  Title,
  H1
} from "native-base";
import { Constants } from "expo";
import {
  REGISTER_SCREEN,
  DASHBOARD,
  APP_NAME,
  RESET_PASSWORD_SCREEN
} from "../consts";
import { View, Image, ScrollView } from "react-native";

export default ({ navigation }) => (
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
          <Input />
        </Item>
        <Item floatingLabel underline>
          <Label>Password</Label>
          <Input secureTextEntry={true} />
        </Item>
      </Form>

      <Button
        block
        onPress={() => navigation.navigate(DASHBOARD)}
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
