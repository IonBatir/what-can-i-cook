import React, { Component } from "react";
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
  Label,
  Item,
  Input,
  Form
} from "native-base";
import { RECIPE_SCREEN } from "../consts";
import { ScrollView } from "react-native";

export default class extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      description: "",
      algorithm: "",
      foods: [{ id: 0, text: "" }]
    };
  }

  render() {
    const { navigation, recipe } = this.props;
    const { name, description, foods, algorithm } = this.state;
    const buttonDisabled = foods[foods.length - 1].text.length < 1;
    const saveButtonDisabled =
      name.length < 1 ||
      description.length < 1 ||
      algorithm.length < 1 ||
      buttonDisabled;

    return (
      <Container>
        <ScrollView>
          <Header
            style={{
              backgroundColor: "#77aeab"
            }}
          >
            <Body>
              <Title>Share your the best recipe</Title>
            </Body>
          </Header>

          <Form>
            <Item stackedLabel>
              <Label>Name</Label>
              <Input onChangeText={text => this.setState({ name: text })} />
            </Item>
            <Item stackedLabel>
              <Label>Description</Label>
              <Input
                onChangeText={text => this.setState({ description: text })}
              />
            </Item>

            <Label style={{ margin: 10 }}>Add food</Label>
            {foods.map((food, id) => (
              <Item key={id} stackedLabel>
                <Label>Name</Label>
                <Input
                  onChangeText={text =>
                    this.setState({
                      foods: [
                        ...foods.filter(food => food.id != id),
                        { id, text }
                      ]
                    })
                  }
                />
              </Item>
            ))}

            <Button
              disabled={buttonDisabled}
              onPress={() => {
                this.setState({
                  foods: [...foods, { id: foods.length, text: "" }]
                });
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
              <Text>Add more food</Text>
            </Button>
            <Item stackedLabel>
              <Label>Algorithm</Label>
              <Input
                onChangeText={text => this.setState({ algorithm: text })}
              />
            </Item>
          </Form>
          <Button
            disabled={saveButtonDisabled}
            onPress={() => {}}
            style={
              saveButtonDisabled
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
            <Text>Add</Text>
          </Button>
        </ScrollView>
      </Container>
    );
  }
}
