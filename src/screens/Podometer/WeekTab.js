import React, { Component } from "react";
import { connect } from 'react-redux';
import WeekProgress from './WeekProgress'
import { getWeekStepCount } from '../../api/googleFitApi'
import {
  Container,
  Button,
  Icon,
  Text
} from "native-base";
import { days, fullDays, months } from '../../utils/date'

class WeekTab extends Component {
  constructor(props) {
    super(props)
    this._offset = 0
    this.state = {
      tabStep: [],
      selectedDateRange: 0,
      startDate: 0,
      endDate: 0
    }
  }

  async componentDidMount() {
    await this._setSelectedDateRange()
    this._getSteps()
  }

  _getSteps() {
    getWeekStepCount(this.state.startDate, this.state.endDate, (error, result) => {
      this.setState({tabStep: result})
    })
  }

  async _setSelectedDateRange() {
    var start = new Date()
    var end = new Date()
    start.setDate(start.getDate() + this._offset)
    end.setDate(end.getDate() + this._offset)
    var nbDays = start.getDay();
    if(nbDays == 0) nbDays = 7
    start.setDate(start.getDate() - (nbDays-1))
    end.setDate(end.getDate() + (6 - (nbDays-1)))
    this.setState({
      selectedDateRange: start.getDate() + " " + months[start.getMonth()] + " - " + end.getDate() + " " + months[end.getMonth()],
      startDate: start,
      endDate: end
    })
  }

  render() {
    return (
      <Container>
        <Container style={{flexDirection: 'row', justifyContent: 'center'}}>
          <Button
            transparent
            onPress={async () => {
              this._offset -= 7
              await this._setSelectedDateRange()
              this._getSteps()}
            }
          >
            <Icon name="ios-arrow-back"/></Button>
          <Text style={{marginTop: 10}}>{this.state.selectedDateRange}</Text>
          <Button
            transparent
            onPress={async () => {
              this._offset += 7
              await this._setSelectedDateRange()
              this._getSteps()}
            }
          >
            <Icon name="ios-arrow-forward"/></Button>
        </Container>
        <WeekProgress tabStep={this.state.tabStep}/>
      </Container>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    goal: state.setNewGoal.goal
  }
}

export default connect(mapStateToProps)(WeekTab)
