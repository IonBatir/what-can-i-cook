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

const Recipe = connect(
  recipe => recipe,
  { fetchAll }
)(
  class extends Component {
    constructor(props) {
      super(props);
      this.state = { items: [], refreshing: false };
    }

    onRefresh = () => {
      this.setState({ refreshing: true });
      this.props.fetchAll(
        () => {
          this.setState({ items: this.props.recipe.items, refreshing: false });
        },
        () => {
          this.setState({ refreshing: false });
        }
      );
    };

    componentDidMount() {
      this.props.fetchAll(
        () => {
          this.setState({ items: this.props.recipe.items });
        },
        () => {}
      );
    }

    render() {
      const { recipe } = this.props;
      return recipe.fetchAll.loading && !this.state.refreshing ? (
        <Spinner />
      ) : (
        <Container style={{ paddingTop: Constants.statusBarHeight }}>
          <ScrollView
            refreshControl={
              <RefreshControl
                refreshing={this.state.refreshing}
                onRefresh={this.onRefresh}
              />
            }
          >
            <Header
              style={{
                backgroundColor: "#77aeab"
              }}
            >
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
              dataArray={this.state.items}
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
                    <H1>{item.name}</H1>
                  </CardItem>
                  <CardItem>
                    <Body>
                      <Text>{item.description}</Text>
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
    }
  }
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
