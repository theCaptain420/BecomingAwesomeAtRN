import React, { Component } from 'react';
import { View, Text } from 'react-native';
import LoadingPage from './src/frontpage/LoadingPage'

class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View>
        <LoadingPage/>
      </View>
    );
  }
}

export default App;
