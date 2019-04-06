import React, { Component } from "react";
import {
  Container,
  Header,
  Title,
  Content,
  Button,
  Icon,
  Right,
  Body,
  Text,
  List,
  ListItem
} from "native-base";
import { Constants } from "expo";
import { ScrollView, StyleSheet, ListView, Alert } from "react-native";

const datas = [
  {
    Name: "Potato",
    expire_data: "06/06/2019",
    quantity: "3",
    uniti: "kg"
  },
  {
    Name: "Orange",
    expire_data: "06/06/2019",
    quantity: "3",
    uniti: "kg"
  },
  {
    Name: "Banana",
    expire_data: "06/06/2019",
    quantity: "3",
    uniti: "kg"
  },
  {
    Name: "Mango",
    expire_data: "06/06/2019",
    quantity: "3",
    uniti: "kg"
  },
  {
    Name: "Avocado",
    expire_data: "06/06/2019",
    quantity: "3",
    uniti: "kg"
  },
  {
    Name: "Lemon",
    expire_data: "06/06/2019",
    quantity: "3",
    uniti: "kg"
  }
];

var dr = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
state = {
  basit: true,
  listViewData: datas
};

export default class extends Component {
  constructor(props) {
    super(props);
    this.ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
    this.state = {
      basic: true,
      listViewData: datas
    };
  }
  deleteRow(secId, rowId, rowMap) {
    rowMap[`${secId}${rowId}`].props.closeRow();
    const newData = [...this.state.listViewData];
    newData.splice(rowId, 1);
    this.setState({ listViewData: newData });
  }
  render() {
    return (
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
              renderRow={data => (
                <ListItem style={{ paddingLeft: 20 }}>
                  <Text>{data.Name}</Text>
                </ListItem>
              )}
              renderLeftHiddenRow={data => (
                <Button
                  full
                  onPress={() => alert(data.Name)}
                  style={{
                    backgroundColor: "#CCC",
                    flex: 1,
                    alignItems: "center",
                    justifyContent: "center"
                  }}
                >
                  <Icon active name="information-circle" />
                </Button>
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
