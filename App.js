import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import ChatScreen from './src/components/screens/ChatScreen';

const MainStack = createStackNavigator();


export default function App(props) {
  return (
    
    <NavigationContainer>
      <MainStack.Navigator initialRouteName="Home">
        <MainStack.Screen name="Home" component={ChatScreen} />
        
      </MainStack.Navigator>
    </NavigationContainer>
  );
}