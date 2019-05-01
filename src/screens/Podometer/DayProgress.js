import React, { Component } from "react";
import { Dimensions } from 'react-native'
import ProgressCircle from 'react-native-progress-circle'
import {
  Container,
  Text
} from "native-base";

export default class DayProgress extends Component {
  render() {
    const screenWidth = Dimensions.get('window').width
    return (
      <Container style={{alignItems: 'center', marginTop: 20}}>
        <ProgressCircle
          percent={Number(this.props.percentProgress)}
          radius={screenWidth/3}
          borderWidth={15}
          color="blue"
          shadowColor="grey"
          bgColor="white"
        >
          <Text style={{ fontSize: 20 }}>{this.props.percentProgress + '% of goal'}</Text>
          <Text style={{ fontSize: 14, marginTop: 20 }}>Your daily goal:</Text>
          <Text style={{ fontSize: 14 }}>{this.props.goal + ' steps'}</Text>
        </ProgressCircle>
        <Container style={{flexDirection: 'row', marginTop: 20, justifyContent: 'center'}}>
          <Container style={{alignItems: 'flex-end'}}>
            <Text style={{ fontSize: 22 }}>{this.props.nbSteps}</Text>
            <Text style={{ fontSize: 15 }}>steps</Text>
          </Container>
          <Container style={{alignItems: 'center'}}>
            <Text style={{ fontSize: 22 }}>{this.props.nbCal}</Text>
            <Text style={{ fontSize: 15 }}>cal</Text>
          </Container>
          <Container style={{alignItems: 'flex-start'}}>
            <Text style={{ fontSize: 22 }}>{this.props.km}</Text>
            <Text style={{ fontSize: 15 }}>km</Text>
          </Container>
        </Container>
      </Container>
    );
  }
}
