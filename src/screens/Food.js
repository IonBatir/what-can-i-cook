import React, { Component } from "react";
import { connect } from "react-redux";
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
  ListItem
} from "native-base";
import { createStackNavigator } from "react-navigation";
import { Constants } from "expo";
import { ScrollView, ListView } from "react-native";
import { Spinner } from "../components";
import { fetchAll } from "../redux/actions/foodActions";
import FoodInfo from "./FoodInfo";
import { FOOD_SCREEN, FOOD_INFO_SCREEN } from "../consts";

const Food = connect(
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
        basic: true,
        listViewData: []
      };
    }

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

    ChooseColor(expira){
      const colors = ["#35aa49", "#c7c22e", "#c43434"]
      const today = new Date();
      console.log("Today:", today);
      console.log("Expire date: ", expira)
      const difference = expira - today;
      const days = difference / (3600 * 1000 * 24);
      console.log("\nDays remaining: ", days);
      if (days < 0)
        return colors[2];
      if (days < 5)
        return colors[1];
      else
        return colors[0];
    } 
    render() {
      return food.fetchAll.loading ? (
        <Spinner />
      ) : (
        <Container style={{ paddingTop: Constants.statusBarHeight }}>
          <ScrollView>
            <Header>
              <Body>
                <Title>Food</Title>
              </Body>
            </Header>

            <Content>
            <List
              dataSource={this.ds.cloneWithRows(this.state.listViewData)}
              disableLeftSwipe
              renderRow={data => (
                <ListItem style={{ 
                  paddingLeft: 20,
                  borderBottomColor: "#bbb",
                  backgroundColor: "#fff"}}>
                   <Icon style={{color: this.ChooseColor(new Date(data.expire_data))}}
                     name="circle"
                     type="FontAwesome"
                     size={4}
                   />
                  <Text style={{color: "#17252a",fontSize: 15, paddingLeft: 10}}>{data.Name}</Text>
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
              leftOpenValue={75}
              rightOpenValue={-75}
            />
            </Content>
          </ScrollView>
        </Container>
      );
    }
  }
);

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
        title: "Food"
      }
    }
  },
  {
    initialRouteName: FOOD_SCREEN
  }
);
