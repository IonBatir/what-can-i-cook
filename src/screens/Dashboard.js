import React, { Component } from "react";
import { createStackNavigator } from "react-navigation";
import {
  Container,
  Header,
  Title,
  Content,
  Button,
  Icon,
  Left,
  Body,
  Text,
  Card,
  CardItem,
  Thumbnail,
  H1,
  List
} from "native-base";
import { Constants } from "expo";
import { ScrollView } from "react-native";
import RecipeInfo from "./RecipeInfo";
import { DASHBOARD_SCREEN, RECIPE_INFO_SCREEN } from "../consts";

const items = [
  {
    Name: "French Fries",
    Description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
  },
  {
    Name: "Mamaliga",
    Description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
  },
  {
    Name: "Placinte",
    Description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
  },
  {
    Name: "Puli prajite",
    Description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
  }
];

const Dashboard = () => (
  <Container style={{ paddingTop: Constants.statusBarHeight }}>
    <ScrollView>
      <Header 
        style={{
          backgroundColor: "#77aeab"
        }}
      >
        <Body>
          <Title>Let's cook something!</Title>
        </Body>
      </Header>

      <Content padder>
        <Card>
          <CardItem header>
            <Text>What can You cook right now!</Text>
          </CardItem>
          <CardItem>
            <Body>
              <Text>
                We just checked your list of food and want to show what can you
                cook right now
              </Text>
            </Body>
          </CardItem>
          <CardItem footer>
            <Text>Enjoy your meal :)</Text>
          </CardItem>
        </Card>
      </Content>

      <List
        style={{ padding: 5 }}
        dataArray={items}
        renderRow={item => (
          <Card style={{ flex: 0 }}>
            <CardItem>
              <Left>
                <Thumbnail source={require("../../assets/icon.png")} />
                <Body>
                  <Text>What Can I Cook?</Text>
                  <Text note>April 6, 2019</Text>
                </Body>
              </Left>
            </CardItem>
            <CardItem>
              <H1>{item.Name}</H1>
            </CardItem>
            <CardItem>
              <Body>
                <Text>{item.Description}</Text>
              </Body>
            </CardItem>
            <CardItem>
              <Left>
                <Button transparent textStyle={{ color: "#87838B" }}>
                  <Icon type="Feather" name="more-vertical" />
                  <Text>Check menu</Text>
                </Button>
              </Left>
            </CardItem>
          </Card>
        )}
      />
    </ScrollView>
  </Container>
);

export default createStackNavigator(
  {
    [DASHBOARD_SCREEN]: {
      screen: Dashboard,
      navigationOptions: {
        title: "DashBoard"
      }
    },
    [RECIPE_INFO_SCREEN]: {
      screen: RecipeInfo,
      navigationOptions: {
        title: "Recipe"
      }
    }
  },
  {
    initialRouteName: DASHBOARD_SCREEN
  }
);
