import React, { Component } from "react";
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
  List
} from "native-base";
import { Constants } from "expo";
import { ScrollView, RefreshControl } from "react-native";
import { Spinner } from "../components";
import { RECIPE_INFO_SCREEN } from "../consts";
import { fetchAllFoodNames } from "../redux/actions/foodActions";
import { filtreRecite } from "../redux/actions/recipeActions";

export default connect(
  recipe => recipe,
  { filtreRecite, fetchAllFoodNames }
)(
  class extends Component {
    constructor(props) {
      super(props);
      this.state = {
        refreshing: false
      };
    }

    componentDidMount() {
      const { filtreRecite, fetchAllFoodNames } = this.props;
      filtreRecite(() => {}, () => {});
      fetchAllFoodNames(() => {}, () => {});
    }

    onRefresh = () => {
      const { filtreRecite } = this.props;
      this.setState({ refreshing: true });
      filtreRecite(
        () => {
          this.setState({ refreshing: false });
        },
        () => {
          this.setState({ refreshing: false });
        }
      );
    };

    render() {
      const { recipe, navigation } = this.props;
      const { refreshing } = this.state;
      return recipe.filtreRecite.loading && !refreshing ? (
        <Spinner />
      ) : (
        <Container style={{ paddingTop: Constants.statusBarHeight }}>
          <ScrollView
            refreshControl={
              <RefreshControl
                refreshing={refreshing}
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
                      We just checked your list of food and want to show what
                      can you cook right now
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
              dataArray={recipe.items}
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
                      <Button
                        onPress={() => navigation.navigate(RECIPE_INFO_SCREEN)}
                        transparent
                        textStyle={{ color: "#87838B" }}
                      >
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
