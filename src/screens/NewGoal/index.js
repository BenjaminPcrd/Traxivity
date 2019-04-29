import React, { Component } from "react";
import {
  Container,
  Header,
  Left,
  Button,
  Icon,
  Body,
  Title
} from "native-base";
//import SetNewGoal from './SetNewGoal'

export default class NewGoal extends Component {
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
             <Title>Set a new goal</Title>
          </Body>
        </Header>

      </Container>
    );
  }
}
//<SetNewGoal navigation={this.props.navigation}/>
