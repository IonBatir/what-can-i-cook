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
import { LOGIN_SCREEN, DASHBOARD, APP_NAME } from "../consts";
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
        Let's cook faster!)
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
        onPress={() => navigation.navigate(LOGIN_SCREEN)}
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
