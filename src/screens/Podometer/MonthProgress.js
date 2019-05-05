import React, { Component } from "react";
import { FlatList } from "react-native";
import {
  Container,
  Text,
  ListItem
} from "native-base";

import {
  ContributionGraph
} from 'react-native-chart-kit'

import { Dimensions } from 'react-native'
import { days, fullDays, months } from '../../utils/date'

export default class MonthProgress extends Component {
  render() {
    const data = []
    const maxValue = Math.max(...this.props.tabStep.map(x => x.value))
    this.props.tabStep.map(x => data.push({date: x.date, count: ((x.value * 10) / maxValue)}))
    const chartConfig = {
      backgroundGradientFrom: 'rgb(220, 220, 255)',
      backgroundGradientTo: 'rgb(250, 250, 250)',
      color: (opacity = 1) => `rgba(50, 50, 50, ${opacity})`,
      decimalPlaces: 1,
    }
    const screenWidth = Dimensions.get('window').width
    console.log()
    return (
      <Container style={{flex: 15}}>
        <ContributionGraph
          values={data}
          endDate={new Date("2019-05-05")}//new Date(this.props.tabStep[(this.props.tabStep).length-1].date)
          numDays={25}//(this.props.tabStep).length
          width={screenWidth}
          height={500}
          chartConfig={chartConfig}
          />

      </Container>
    );
  }
}
