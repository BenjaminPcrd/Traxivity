import React, { Component } from "react";
import { Dimensions } from 'react-native'
import { getAuth, getDailyStepCount } from '../../api/googleFitApi'
import { connect } from 'react-redux';
import GoogleFit from 'react-native-google-fit'

import {
  Container,
  Text
} from "native-base";

class DayPodometer extends Component {
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
    const screenWidth = Dimensions.get('window').width
    return (
      <Container>
        <Text>{this.state.nbSteps}</Text>

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
