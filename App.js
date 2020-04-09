import React, { Component } from 'react';
import LoadingPage from './src/frontpage/LoadingPage'
import { NavigationContainer } from '@react-navigation/native';
import  NavigaionPage from './src/navigation/NavigationPage';

import { createStackNavigator } from '@react-navigation/stack';
import InstagramPage from './src/instagramClone/InstagramPage'

const Stack = createStackNavigator();


class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <NavigationContainer>
        <Stack.Navigator screenOptions={{
          headerShown: false
        }}>
        <Stack.Screen
        name="Instagram"
        component={InstagramPage}
      />
        <Stack.Screen
            name="Navigation"
            component={NavigaionPage}
          />
        
          
         
          <Stack.Screen
            name="HackerNews"
            component={LoadingPage}
          />
        </Stack.Navigator>
      </NavigationContainer>
    )

  }
}

export default App;
