import React, { Component } from "react";
import { connect } from 'react-redux';
import MonthProgress from './MonthProgress'
import { getPeriodStepCount } from '../../api/googleFitApi'
import {
  Container,
  Button,
  Icon,
  Text
} from "native-base";
import { days, fullDays, months } from '../../utils/date'

class MonthTab extends Component {
  constructor(props) {
    super(props)
    this.state = {
      tabStep: [{date: '', value: ''}],
      startDate: 0,
      endDate: 0
    }
  }

  async componentDidMount() {
    await this._setSelectedDateRange()
    this._getSteps()
  }

  _getSteps() {
    getPeriodStepCount(this.state.startDate, this.state.endDate, (error, result) => {
      this.setState({tabStep: result})
    })
  }

  async _setSelectedDateRange() {
    var start = new Date()
    var end = new Date()
    start.setHours(0, 0, 0, 0)
    start.setDate(1)
    start.setMonth(0)
    end.setHours(23, 59, 59, 999)
    end.setDate(31)
    end.setMonth(11)
    this.setState({
      startDate: start,
      endDate: end
    })
  }


  render() {
    return (
      <Container>
        <MonthProgress tabStep={this.state.tabStep}/>
      </Container>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    goal: state.setNewGoal.goal
  }
}

export default connect(mapStateToProps)(MonthTab)
