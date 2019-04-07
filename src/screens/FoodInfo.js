import React, { Component } from "react";
import { connect } from "react-redux";
import {
  Input,
  Form,
  Item,
  Label,
  Container,
  Button,
  Text,
  DatePicker
} from "native-base";
import { FOOD_SCREEN } from "../consts";
import { Spinner } from "../components";
import {
  addFood,
  editFood,
  deleteFood,
  fetchAll
} from "../redux/actions/foodActions";
import { ScrollView } from "react-native";

export default connect(
  food => food,
  { addFood, editFood, deleteFood, fetchAll }
)(
  class extends Component {
    constructor(props) {
      super(props);
      const { params } = this.props.navigation.state;
      this.editMode = params && params.data;

      this.state = this.editMode
        ? {
            name: params.data.name,
            bar_code: params.data.bar_code,
            expire_date: new Date(params.data.expire_date),
            quantity: params.data.quantity,
            uniti: params.data.uniti,
            id: params.data.id
          }
        : {
            name: "",
            bar_code: "",
            expire_date: new Date(),
            quantity: "",
            uniti: ""
          };
    }

    static navigationOptions = ({ navigation }) => ({
      headerTitle: `${navigation.state.params.title}`
    });

    render() {
      const {
        navigation,
        food,
        addFood,
        editFood,
        deleteFood,
        fetchAll
      } = this.props;
      const { name, quantity, uniti, expire_date } = this.state;

      const buttonDisabled =
        name.length < 1 || quantity.length < 1 || uniti.length < 1;

      return food.fetchAll.loading ||
        food.add.loading ||
        food.edit.loading ||
        food.delete.loading ? (
        <Spinner />
      ) : (
        <Container>
          <ScrollView>
            <Form>
              <Item stackedLabel>
                <Label>Name</Label>
                <Input
                  onChangeText={text => this.setState({ name: text })}
                  defaultValue={name}
                />
              </Item>
              <Item stackedLabel>
                <Label>Expire Date</Label>
                <DatePicker
                  defaultDate={expire_date}
                  minimumDate={new Date()}
                  maximumDate={new Date(2020, 12, 31)}
                  locale={"en"}
                  timeZoneOffsetInMinutes={undefined}
                  modalTransparent={false}
                  animationType={"fade"}
                  androidMode={"default"}
                  onDateChange={date => this.setState({ expire_date: date })}
                  disabled={false}
                />
              </Item>
              <Item stackedLabel>
                <Label>Quantity</Label>
                <Input
                  onChangeText={text => this.setState({ quantity: text })}
                  defaultValue={quantity}
                />
              </Item>
              <Item stackedLabel>
                <Label>Unity</Label>
                <Input
                  onChangeText={text => this.setState({ uniti: text })}
                  defaultValue={uniti}
                />
              </Item>
            </Form>

            <Button
              block
              disabled={buttonDisabled}
              success
              onPress={() => {
                this.editMode
                  ? editFood(
                      { ...this.state },
                      () => {
                        navigation.navigate(FOOD_SCREEN);
                      },
                      () => {}
                    )
                  : addFood(
                      { ...this.state },
                      () => {
                        navigation.navigate(FOOD_SCREEN);
                      },
                      () => {}
                    );
              }}
              style={
                buttonDisabled
                  ? {
                      margin: 10,
                      marginTop: 20,
                      backgroundColor: "gray",
                      borderRadius: 0
                    }
                  : {
                      backgroundColor: "#3aafa9",
                      margin: 10,
                      marginTop: 20,
                      borderRadius: 0
                    }
              }
            >
              <Text
                style={{
                  fontWeight: "bold"
                }}
              >
                Save
              </Text>
            </Button>
            {this.editMode && (
              <Button
                block
                danger
                onPress={() =>
                  deleteFood(
                    { id: this.state.id },
                    () => {
                      navigation.navigate(FOOD_SCREEN);
                    },
                    () => {}
                  )
                }
                style={{
                  backgroundColor: "white",
                  margin: 10,
                  marginTop: 20,
                  elevation: 0
                }}
              >
                <Text
                  style={{
                    color: "grey",
                    textDecorationLine: "underline"
                  }}
                >
                  Remove item
                </Text>
              </Button>
            )}
          </ScrollView>
        </Container>
      );
    }
  }
);
