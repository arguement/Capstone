import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { Provider as PaperProvider } from 'react-native-paper';
import ChatScreen from './src/components/screens/ChatScreen';
import LoginScreen from './src/components/screens/Login'

const MainStack = createStackNavigator();


export default function App(props) {
  return (
    <PaperProvider>
      <NavigationContainer>
        <MainStack.Navigator initialRouteName="Login">
          <MainStack.Screen name="Home" component={ChatScreen} />
          <MainStack.Screen name="Login" component={LoginScreen} />
          
        </MainStack.Navigator>
      </NavigationContainer>
    </PaperProvider>
  );
}