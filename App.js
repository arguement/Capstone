import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { Provider as PaperProvider } from 'react-native-paper';
import ChatScreen from './src/components/screens/ChatScreen';
import LoginScreen from './src/components/screens/Login';
import RegisterScreen from './src/components/screens/RegisterScreen';


//redux imports
import store from './src/store'
import { Provider } from 'react-redux'


//ui kitten imports 
import * as eva from '@eva-design/eva';
import { ApplicationProvider } from '@ui-kitten/components';


//disable yellow warning
console.disableYellowBox = true;


// creation of the root navigation stack
const MainStack = createStackNavigator();


function App(props) {
  return (
    
      <PaperProvider>
        
        <NavigationContainer>
          <MainStack.Navigator initialRouteName="Register">
            <MainStack.Screen name="Home" component={ChatScreen} />
            <MainStack.Screen name="Login" component={LoginScreen} />
            <MainStack.Screen name="Register" component={RegisterScreen} />
            
          </MainStack.Navigator>
        </NavigationContainer>
        
      </PaperProvider>
    
    
  );

}

export default () => (
  <ApplicationProvider {...eva} theme={eva.light}>
    <Provider store={store}>
        <App />
    </Provider> 
  </ApplicationProvider>
);