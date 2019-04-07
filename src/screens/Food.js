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
import { Constants } from "expo";
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
      this.ds = new ListView.DataSource({
        rowHasChanged: (r1, r2) => r1 !== r2
      });
      this.state = {
        refreshing: false,
        basic: true,
        listViewData: [],
        active: false
      };
    }

    onRefresh = () => {
      this.setState({ refreshing: true });
      this.props.fetchAll(
        () => {
          this.setState({
            listViewData: this.props.food.items,
            refreshing: false
          });
        },
        () => {
          this.setState({ refreshing: false });
        }
      );
    };

    componentDidMount() {
      this.props.fetchAll(
        () => {
          this.setState({ listViewData: this.props.food.items });
        },
        () => {}
      );
    }

    deleteRow(secId, rowId, rowMap) {
      rowMap[`${secId}${rowId}`].props.closeRow();
      const newData = [...this.state.listViewData];
      newData.splice(rowId, 1);
      this.setState({ listViewData: newData });
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
              <List
                dataSource={this.ds.cloneWithRows(this.state.listViewData)}
                disableRightSwipe
                renderRow={data => (
                  <ListItem
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
                  </ListItem>
                )}
                renderRightHiddenRow={(data, secId, rowId, rowMap) => (
                  <Button
                    full
                    danger
                    onPress={_ => this.deleteRow(secId, rowId, rowMap)}
                    style={{
                      flex: 1,
                      alignItems: "center",
                      justifyContent: "center"
                    }}
                  >
                    <Icon active name="trash" />
                  </Button>
                )}
                disableRightSwipe
                rightOpenValue={-75}
              />
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
