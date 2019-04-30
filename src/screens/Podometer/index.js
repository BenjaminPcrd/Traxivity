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
import { getAuth, getDailyStepCount } from '../../api/googleFitApi'
import { connect } from 'react-redux';
import GoogleFit from 'react-native-google-fit'
//import DayPodometer from './DayPodometer';
//import WeekPodometer from './WeekPodometer';

class Podometer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      nbSteps: 0
    }
    getAuth()
  }

  componentDidMount() {
    GoogleFit.onAuthorize((res) => {
      getDailyStepCount((error, result) => {
        this.setState({nbSteps: result})
      })
    })
  }

  render() {
    console.log(this.props)
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
            <Text>{this.state.nbSteps}</Text>
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

const mapStateToProps = (state) => {
  return {
    goal: state.setNewGoal.goal
  }
}

export default connect(mapStateToProps)(Podometer)
