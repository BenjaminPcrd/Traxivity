import React, { Component } from "react";
import { Image, FlatList } from "react-native";
import {
  Content,
  Text,
  ListItem,
  Icon,
  Container,
  Left,
} from "native-base";

const datas = [
  {
    name: "Podometer",
    route: "Podometer",
    icon: "walk",
  },
  {
    name: "New Goal",
    route: "NewGoal",
    icon: "create",
  },
  {
    name: "Settings",
    route: "Settings",
    icon: "ios-settings",
  },
];

class SideBar extends Component {
  render() {
    return (
      <Container>
        <Content bounces={true} style={{ flex: 1, backgroundColor: "#fff", top: -1 }}>
        <Image
            source={{
              uri:
                "https://tse1.mm.bing.net/th?id=OIP.fOgK7I4fMaYKzMlwexqmbQHaDt"
            }}
            style={{
              height: 120,
              width: "100%",
              alignSelf: "stretch",
              position: "absolute"
            }}
          />
          <Image
            square
            style={{
              height: 85,
              width: 160,
              position: "absolute",
              alignSelf: "center",
              top: 20
            }}
            source={{
              uri:
                "http://www.comp.rgu.ac.uk/wp-content/uploads/2017/02/LOGO-SelfBack-300x155.png"
            }}
          />
          <FlatList
            data={datas}
            contentContainerStyle={{ marginTop: 120 }}
            keyExtractor={(item) => item.route}
            renderItem={({item}) =>
              <ListItem button noBorder onPress={() => this.props.navigation.navigate(item.route)} >
                <Left>
                  <Icon active name={item.icon} style={{ color: "#777", fontSize: 26, width: 30 }}/>
                  <Text> {item.name} </Text>
                </Left>
              </ListItem>
            }
          />
        </Content>
      </Container>
    );
  }
}

export default SideBar;
