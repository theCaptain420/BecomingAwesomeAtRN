import React, { Component } from 'react';
import { View, Text } from 'react-native';
import WelcomePage from './src/frontpage/WelcomePage'

class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View>
        <WelcomePage/>
      </View>
    );
  }
}

export default App;
