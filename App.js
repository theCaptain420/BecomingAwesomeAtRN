import React, { Component } from 'react';
import { View, Text } from 'react-native';
import WelcomePage from './src/frontpage/WelcomePage'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <View>
        <Text> App </Text>
        <WelcomePage/>
      </View>
    );
  }
}

export default App;
