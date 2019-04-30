import React, { Component } from "react";
import { Dimensions } from 'react-native'
import { getAuth, getDailyStepCount, getDailyCalorieCount, getDailyDistanceCount } from '../../api/googleFitApi'
import { connect } from 'react-redux';
import GoogleFit from 'react-native-google-fit'
import ProgressCircle from 'react-native-progress-circle'

import {
  Container,
  Text
} from "native-base";

class DayProgressCircle extends Component {
  constructor(props) {
    super(props)
    this.state = {
      percentProgress: 0,
      nbSteps: 0,
      nbCal: 0,
      km: 0
    }
    getAuth()
  }

  componentDidMount() {
    GoogleFit.onAuthorize((res) => {
      getDailyStepCount((error, result) => {
        this.setState({nbSteps: result})
        let percentProgress = 0;
        setInterval(() => {
          percentProgress += 1
          if(percentProgress > ((this.state.nbSteps/this.props.goal) * 100).toFixed(0)) {
            percentProgress = ((this.state.nbSteps/this.props.goal) * 100).toFixed(0)
          }
          this.setState({percentProgress });
        }, 10);
      })

      getDailyCalorieCount((error, result) => {
        this.setState({nbCal: result });
      })

      getDailyDistanceCount((error, result) => {
        this.setState({km: result });
      })
    })
  }

  render() {
    const screenWidth = Dimensions.get('window').width
    return (
      <Container style={{alignItems: 'center', marginTop: 20}}>
        <ProgressCircle
          percent={Number(this.state.percentProgress)}
          radius={screenWidth/3}
          borderWidth={15}
          color="blue"
          shadowColor="grey"
          bgColor="white"
        >
          <Text style={{ fontSize: 18 }}>{this.state.percentProgress + '% of goal'}</Text>
        </ProgressCircle>
        <Container style={{flexDirection: 'row', marginTop: 20, justifyContent: 'center'}}>
          <Container style={{alignItems: 'flex-end'}}>
            <Text style={{ fontSize: 18 }}>{this.state.nbSteps}</Text>
            <Text style={{ fontSize: 12 }}>steps</Text>
          </Container>
          <Container style={{alignItems: 'center'}}>
            <Text style={{ fontSize: 18 }}>{this.state.nbCal}</Text>
            <Text style={{ fontSize: 12 }}>cal</Text>
          </Container>
          <Container style={{alignItems: 'flex-start'}}>
            <Text style={{ fontSize: 18 }}>{this.state.km}</Text>
            <Text style={{ fontSize: 12 }}>km</Text>
          </Container>
        </Container>
      </Container>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    goal: state.setNewGoal.goal
  }
}

export default connect(mapStateToProps)(DayProgressCircle)
