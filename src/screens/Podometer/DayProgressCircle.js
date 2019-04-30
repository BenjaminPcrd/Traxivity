import React, { Component } from "react";
import { Dimensions } from 'react-native'
import { getAuth, getDailyStepCount } from '../../api/googleFitApi'
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
      stepProgress: 0,
      nbSteps: 0
    }
    getAuth()
  }

  componentDidMount() {
    GoogleFit.onAuthorize((res) => {
      getDailyStepCount((error, result) => {
        this.setState({nbSteps: result})
        let percentProgress = 0;
        let stepProgress = 0
        setInterval(() => {
          percentProgress += 1
          stepProgress += 15
          if(percentProgress > ((this.state.nbSteps/this.props.goal) * 100).toFixed(0)) {
            percentProgress = ((this.state.nbSteps/this.props.goal) * 100).toFixed(0)
          }
          if(stepProgress > this.state.nbSteps) {
            stepProgress = this.state.nbSteps
          }
          this.setState({percentProgress, stepProgress });
        }, 10);
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
          <Text style={{ fontSize: 18 }}>{this.state.stepProgress + ' steps'}</Text>
          <Text style={{ fontSize: 18 }}>{this.state.percentProgress + '% of goal'}</Text>
        </ProgressCircle>
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
