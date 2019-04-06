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
import { Constants } from "expo";
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
      Name: params.data.Name,
      Description: params.data.Description
    };
  }

  render() {
    const { navigation } = this.props;
    const { Name, Description } = this.state;

    return (
      <Container>
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
            <H1>{Name}</H1>
          </CardItem>
          <CardItem>
            <Body>
              <Text>{Description}</Text>
            </Body>
          </CardItem>
        </Card>
      </Container>
    );
  }
}
