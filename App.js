import React from "react";
import { View, Text, Button } from "react-native";
import { createStackNavigator } from "react-navigation";
import BarCodeScanner from "./BarCodeScanner";

class HomeScreen extends React.Component {
  saveCode(code) {
    this.setState({
      codeRead: code
    });
  }
  state = {
    codeRead: ""
  };
  render() {
    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Text>Home Screen</Text>
        <Button
          onPress={() =>
            this.props.navigation.navigate("Scanner", {
              onCodeRead: code => this.saveCode(code)
            })
          }
          title="click me"
        />
        <Text>{this.state.codeRead}</Text>
      </View>
    );
  }
}

export default createStackNavigator(
  {
    Home: HomeScreen,
    Scanner: BarCodeScanner
  },
  {
    initialRouteName: "Home"
  }
);
