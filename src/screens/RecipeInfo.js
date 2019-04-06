import React, { Component } from "react";
import { createStackNavigator } from "react-navigation";
import { connect } from "react-redux";
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
  List,
  Item,
  Input
} from "native-base";
import { Spinner } from "../components";
import { fetchAll } from "../redux/actions/recipeActions";
import RecipeInfo from "./RecipeInfo";
import { RECIPE_SCREEN, RECIPE_INFO_SCREEN } from "../consts";
import { ScrollView, RefreshControl } from "react-native";

export default class extends Component {
  constructor(props) {
    super(props);
    const { params } = this.props.navigation.state;
    this.state = {
      name: params.item.name,
      description: params.item.description,
      foods: params.item.foods,
      algorithm: params.item.algorithm
    };
  }

  render() {
    const { navigation, recipe } = this.props;
    const { name, description, foods, algorithm } = this.state;

    return (
      <Container>
        <ScrollView>
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
              <H1>{name}</H1>
            </CardItem>
            <CardItem>
              <Body>
                <Text>{description}</Text>
              </Body>
            </CardItem>
          </Card>

          <Card style={{ flex: 0 }}>
            <Card>
              <CardItem header bordered>
                <Text>All you need is food</Text>
              </CardItem>
              <List
                style={{ padding: 5 }}
                dataArray={foods}
                renderRow={item => (
                  <CardItem>
                    <Left>
                      <Icon
                        active
                        name="circle"
                        type="Feather"
                        style={{ color: "#DD5044", fontSize: 15 }}
                      />
                      <Text>{item}</Text>
                    </Left>
                  </CardItem>
                )}
              />
              <CardItem>
                <Body>
                  <Text>{algorithm}</Text>
                </Body>
              </CardItem>
            </Card>
          </Card>
        </ScrollView>
      </Container>
    );
  }
}
