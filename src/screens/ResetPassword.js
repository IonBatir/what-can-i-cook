import React from "react";
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
import { LOGIN_SCREEN, HEADER } from "../consts";
import { ScrollView } from "react-native";

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
        Don't worry, Honey!
      </H1>

      <Form>
        <Item floatingLabel underline>
          <Label>Email</Label>
          <Input />
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
        onPress={() => navigation.navigate(LOGIN_SCREEN)}
        transparent
      >
        <Text style={{ textAlign: "center" }}>Go Back!</Text>
      </Button>
    </ScrollView>
  </Container>
);
