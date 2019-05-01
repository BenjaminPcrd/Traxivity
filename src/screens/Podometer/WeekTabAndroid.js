import React, { Component } from "react";
import { connect } from 'react-redux';
import WeekProgress from './WeekProgress'
import { getWeekStepCount } from '../../api/googleFitApi'

class WeekTabAndroid extends Component {
  constructor(props) {
    super(props)
    this.state = {
      tabStep: []
    }
  }

  componentDidMount() {
    getWeekStepCount((error, result) => {
      this.setState({tabStep: result})
    })
  }

  render() {
    console.log(this.state)
    return (
      <WeekProgress tabStep={this.state.tabStep}/>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    goal: state.setNewGoal.goal
  }
}

export default connect(mapStateToProps)(WeekTabAndroid)
