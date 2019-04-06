import React, { Component } from "react";
import {
  Container,
  Header,
  Title,
  Content,
  Button,
  Icon,
  Body,
  Text,
  List,
  ListItem,
  View,
  Fab
} from "native-base";
import { createStackNavigator } from "react-navigation";
import { Constants } from "expo";
import { ScrollView, ListView, Alert } from "react-native";
import FoodInfo from "./FoodInfo";
import { FOOD_SCREEN, FOOD_INFO_SCREEN } from "../consts";

const datas = [
  {
    name: "Potato",
    expire_date: "06/06/2019",
    quantity: "3",
    uniti: "kg"
  },
  {
    name: "Orange",
    expire_date: "06/06/2019",
    quantity: "3",
    uniti: "kg"
  },
  {
    name: "Banana",
    expire_date: "06/06/2019",
    quantity: "3",
    uniti: "kg"
  },
  {
    name: "Mango",
    expire_date: "06/06/2019",
    quantity: "3",
    uniti: "kg"
  },
  {
    name: "Avocado",
    expire_date: "06/06/2019",
    quantity: "3",
    uniti: "kg"
  },
  {
    name: "Lemon",
    expire_date: "06/06/2019",
    quantity: "3",
    uniti: "kg"
  }
];

class Food extends Component {
  constructor(props) {
    super(props);
    this.ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
    this.state = {
      basic: true,
      listViewData: datas,
      active: false
    };
  }
  deleteRow(secId, rowId, rowMap) {
    rowMap[`${secId}${rowId}`].props.closeRow();
    const newData = [...this.state.listViewData];
    newData.splice(rowId, 1);
    this.setState({ listViewData: newData });
  }
  render() {
    const { navigation } = this.props;
    return (
      <Container style={{ paddingTop: Constants.statusBarHeight }}>
        <ScrollView>
          <Content>
            <List
              dataSource={this.ds.cloneWithRows(this.state.listViewData)}
              renderRow={data => (
                <ListItem
                  button
                  onPress={() => {
                    /* 1. Navigate to the Details route with params */
                    navigation.navigate(FOOD_INFO_SCREEN, {
                      data
                    });
                  }}
                  style={{ paddingLeft: 20 }}
                >
                  <Text>{data.name}</Text>
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
              rightOpenValue={-75}
              disableRightSwipe
            />
          </Content>
        </ScrollView>
        <Fab
          active={this.state.active}
          containerStyle={{}}
          style={{ backgroundColor: "#5067FF" }}
          position="bottomRight"
          onPress={() => navigation.navigate(FOOD_INFO_SCREEN)}
        >
          <Icon name="add-to-list" type="Entypo" />
        </Fab>
      </Container>
    );
  }
}

export default createStackNavigator(
  {
    [FOOD_SCREEN]: {
      screen: Food,
      navigationOptions: {
        title: "Food"
      }
    },
    [FOOD_INFO_SCREEN]: {
      screen: FoodInfo,
      navigationOptions: {
        title: "Food Information"
      }
    }
  },
  {
    initialRouteName: FOOD_SCREEN
  }
);
