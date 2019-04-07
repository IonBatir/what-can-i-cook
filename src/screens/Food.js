import React, { Component } from "react";
import { connect } from "react-redux";
import {
  Container,
  Header,
  Title,
  Content,
  Button,
  Icon,
  View,
  Body,
  Text,
  List,
  ListItem,
  Fab
} from "native-base";
import { ScrollView, ListView, RefreshControl } from "react-native";
import { Spinner } from "../components";
import { fetchAll } from "../redux/actions/foodActions";
import { FOOD_INFO_SCREEN } from "../consts";

export default connect(
  food => food,
  { fetchAll }
)(
  class extends Component {
    constructor(props) {
      super(props);
      this.state = {
        refreshing: false,
        basic: true,
        active: false
      };
    }

    onRefresh = () => {
      this.setState({ refreshing: true });
      this.props.fetchAll(
        () => {
          this.setState({
            refreshing: false
          });
        },
        () => {
          this.setState({ refreshing: false });
        }
      );
    };

    componentDidMount() {
      this.props.fetchAll(() => {}, () => {});
    }

    ChooseColor(expira) {
      const colors = ["#35aa49", "#c7c22e", "#c43434"];
      const today = new Date();
      const difference = expira - today;
      const days = difference / (3600 * 1000 * 24);
      if (days < 0) return colors[2];
      if (days < 5) return colors[1];
      else return colors[0];
    }
    render() {
      const { food, navigation } = this.props;
      return food.fetchAll.loading && !this.state.refreshing ? (
        <Spinner />
      ) : (
        <Container>
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
                backgroundColor: "#77aeab",
                marginBottom: 10
              }}
            >
              <Body>
                <Title>Available products in your fridge.</Title>
              </Body>
            </Header>

            <Content>
              <List>
                {food.items.map(data => (
                  <ListItem
                    key={data.id}
                    onPress={() => {
                      navigation.navigate(FOOD_INFO_SCREEN, {
                        title: "Edit Food",
                        data
                      });
                    }}
                    style={{
                      paddingLeft: 20,
                      borderBottomColor: "#bbb",
                      backgroundColor: "#fff"
                    }}
                  >
                    <Icon
                      style={{
                        color: this.ChooseColor(new Date(data.expire_date)),
                        fontSize: 15
                      }}
                      name="circle"
                      type="FontAwesome"
                      size={4}
                    />
                    <Text
                      style={{
                        color: "#17252a",
                        fontSize: 15,
                        paddingLeft: 10,
                        fontStyle: "italic"
                      }}
                    >
                      {data.name}
                    </Text>
                    <Text
                      style={{
                        paddingLeft: 20,
                        marginTop: 10,
                        fontSize: 12,
                        textAlign: "right",
                        alignSelf: "stretch",
                        color: "grey",
                        fontStyle: "italic",
                        flex: 1
                      }}
                    >
                      {data.quantity}
                      {data.uniti}
                    </Text>
                  </ListItem>
                ))}
              </List>
            </Content>
          </ScrollView>
          <View style={{ flex: 1 }}>
            <Fab
              direction="up"
              active={this.state.active}
              containerStyle={{}}
              style={{ backgroundColor: "#62c3be" }}
              position="bottomRight"
              onPress={() => this.setState({ active: !this.state.active })}
            >
              <Icon name="add-to-list" type="Entypo" />
              <Button
                style={{ backgroundColor: "#3aafa9" }}
                onPress={() =>
                  navigation.navigate(FOOD_INFO_SCREEN, { title: "Add Food" })
                }
              >
                <Icon name="pencil" type="Entypo" />
              </Button>
              <Button style={{ backgroundColor: "#3aafa9" }} onPress={() => {}}>
                <Icon name="barcode-scan" type="MaterialCommunityIcons" />
              </Button>
            </Fab>
          </View>
        </Container>
      );
    }
  }
);
