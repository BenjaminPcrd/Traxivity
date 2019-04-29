import React, { Component } from "react";
import {
  Container,
  Header,
  Left,
  Button,
  Icon,
  Body,
  Title,
  Tabs,
  Tab,
  Text
} from "native-base";
//import DayPodometer from './DayPodometer';
//import WeekPodometer from './WeekPodometer';

export default class Podometer extends Component {
  render() {
    return (
      <Container>
        <Header>
          <Left>
            <Button
              transparent
              onPress={() => this.props.navigation.openDrawer()}
            >
              <Icon name="ios-menu" />
            </Button>
          </Left>
          <Body>
             <Title>Podometer</Title>
          </Body>
        </Header>
        <Tabs>
          <Tab heading="Day">

          </Tab>
          <Tab heading="Week">

          </Tab>
          <Tab heading="Messages">
            <Text>Messages tab</Text>
          </Tab>
        </Tabs>
      </Container>
    );
  }
}
//<DayPodometer />
//<WeekPodometer />
