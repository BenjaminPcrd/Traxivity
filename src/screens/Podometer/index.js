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

import DayTabAndroid from './DayTabAndroid';
import WeekTab from './WeekTab';
import MonthTab from './MonthTab'

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
            <DayTabAndroid />
          </Tab>
          <Tab heading="Week">
            <WeekTab/>
          </Tab>
          <Tab heading="Month">
            <MonthTab/>
          </Tab>
          <Tab heading="Messages">
            <Text>Messages tab</Text>
          </Tab>
        </Tabs>
      </Container>
    );
  }
}
