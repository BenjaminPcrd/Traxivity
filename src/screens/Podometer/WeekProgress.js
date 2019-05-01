import React, { Component } from "react";
import { FlatList } from "react-native";
import {
  Container,
  Text,
  ListItem
} from "native-base";

import {
  LineChart,
  BarChart
} from 'react-native-chart-kit'

import { Dimensions } from 'react-native'
import { days, fullDays, months } from '../../utils/date'

export default class WeekProgress extends Component {
  render() {
    const data = {
      labels: this.props.tabStep.map(x => days[new Date(x.date).getDay()]),
      datasets: [{
        data: this.props.tabStep.map(x => x.value),
      }]
    }
    const chartConfig = {
      backgroundGradientFrom: 'rgb(220, 220, 255)',
      backgroundGradientTo: 'rgb(250, 250, 250)',
      color: (opacity = 1) => `rgba(50, 50, 50, ${opacity})`,
      decimalPlaces: 1,
    }
    const screenWidth = Dimensions.get('window').width
    return (
      <Container>
        <BarChart
          data={data}
          width={screenWidth}
          height={220}
          chartConfig={chartConfig}
          fromZero={true}
        />
        <FlatList
          data={this.props.tabStep}
          keyExtractor={(item) => item.date}
          renderItem={({item}) =>
            <ListItem>
              <Text style={{ fontSize: 12, color: 'grey' }}> { fullDays[new Date(item.date).getDay()] + ', ' + new Date(item.date).getDate() + " " + months[new Date(item.date).getMonth()]} </Text>
              <Text style={{ fontSize: 18 }}> {item.value + " steps"} </Text>
            </ListItem>
          }
        />

      </Container>
    );
  }
}
