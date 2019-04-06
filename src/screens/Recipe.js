import React from "react";
import { createStackNavigator } from "react-navigation";
import {
  Container,
  Header,
  Title,
  Content,
  Button,
  Icon,
  Left,
  Right,
  Body,
  Text,
  Card,
  CardItem,
  Thumbnail,
  H1,
  List,
  Item,
  Input
} from "native-base";
import { Constants } from "expo";
import RecipeInfo from "./RecipeInfo";
import { RECIPE_SCREEN, RECIPE_INFO_SCREEN } from "../consts";
import { ScrollView } from "react-native";

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

const Recipe = () => (
  <Container style={{ paddingTop: Constants.statusBarHeight }}>
    <ScrollView>
      <Header>
        <Body>
          <Title>All recipes</Title>
        </Body>
      </Header>

      <Header searchBar rounded>
        <Item>
          <Icon name="ios-search" />
          <Input placeholder="Search" />
          <Icon name="food-variant" type="MaterialCommunityIcons" />
        </Item>
        <Button transparent>
          <Text>Search</Text>
        </Button>
      </Header>

      <Content padder>
        <Card>
          <CardItem header>
            <Text>You cook what you want!</Text>
          </CardItem>
          <CardItem>
            <Body>
              <Text>If you want to cook, just do IT!</Text>
            </Body>
          </CardItem>
          <CardItem>
            <Body>
              <Text>Before you start to cook, check your food.</Text>
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
    [RECIPE_SCREEN]: {
      screen: Recipe,
      navigationOptions: {
        title: "Recipe"
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
    initialRouteName: RECIPE_SCREEN
  }
);
