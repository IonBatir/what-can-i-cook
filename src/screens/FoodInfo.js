import React, { Component } from "react";
import {
  Input,
  Form,
  Item,
  Label,
  Container,
  Button,
  Text,
  DatePicker,
  Left
} from "native-base";
import { underline } from "ansi-colors";

export default class extends Component {
  constructor(props) {
    super(props);
    const { params } = this.props.navigation.state;
    this.editMode = params && params.data;

    this.state = this.editMode
      ? {
          name: params.data.name,
          expire_date: new Date(params.data.expire_date),
          quantity: params.data.quantity,
          uniti: params.data.uniti
        }
      : {
          name: "",
          expire_date: new Date(),
          quantity: "",
          uniti: ""
        };
  }

  static navigationOptions = ({ navigation }) => ({
    headerTitle: `${navigation.state.params.title}`
  });

  render() {
    const { navigation } = this.props;
    const { name, quantity, uniti, expire_date } = this.state;

    const buttonDisabled =
      name.length < 1 || quantity.length < 1 || uniti.length < 1;
    return (
      <Container>
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
            onPress={() => console.log("pressed")}
            style={{
              backgroundColor: "white",
              margin: 10,
              marginTop: 20
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
      </Container>
    );
  }
}
