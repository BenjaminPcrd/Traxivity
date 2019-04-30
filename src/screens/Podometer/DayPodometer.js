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

class DayPodometer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      progress: 0,
      nbSteps: 0
    }
    getAuth()
  }

  componentDidMount() {
    GoogleFit.onAuthorize((res) => {
      getDailyStepCount((error, result) => {
        this.setState({nbSteps: result})
        let progress = 0;
        setInterval(() => {
          progress += 0.5
          if (progress > ((this.state.nbSteps/this.props.goal) * 100).toFixed(0)) {
            progress = ((this.state.nbSteps/this.props.goal) * 100).toFixed(0)
          }
          this.setState({ progress });
        }, 5);
      })
    })
  }

  render() {

    console.log(this.state.progress)
    const screenWidth = Dimensions.get('window').width
    let progressLabel = Number(this.state.progress).toFixed(0)
    return (
      <Container style={{alignItems: 'center', marginTop: 20}}>
        <ProgressCircle
          percent={Number(this.state.progress)}
          radius={screenWidth/3}
          borderWidth={15}
          color="blue"
          shadowColor="grey"
          bgColor="white"
        >
          <Text style={{ fontSize: 18 }}>{this.state.nbSteps + ' steps'}</Text>
          <Text style={{ fontSize: 18 }}>{progressLabel + '% of the goal'}</Text>
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

export default connect(mapStateToProps)(DayPodometer)
