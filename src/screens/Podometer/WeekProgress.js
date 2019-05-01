import React, { Component } from "react";
import { FlatList } from "react-native";
import {
  Container,
  Text,
  ListItem
} from "native-base";

export default class WeekProgress extends Component {
  render() {
    return (
      <Container>
        <FlatList
          data={this.props.tabStep}
          keyExtractor={(item) => item.date}
          renderItem={({item}) =>
            <ListItem button noBorder>
              <Text style={{ fontSize: 15 }}> {item.date + ':'} </Text>
              <Text style={{ fontSize: 20 }}> {item.value} </Text>
            </ListItem>
          }
        />
      </Container>
    );
  }
}
