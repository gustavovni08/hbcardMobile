import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import SingInScreen from './src/screens/SingInScreen';
import SingUpScreen from './src/screens/SingUpScreen';
import LoginScreen from './src/screens/LoginScreen';
const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Login" component={LoginScreen}/>
        <Stack.Screen name="SingIn" component={SingInScreen}/>
        <Stack.Screen name="SingUp" component={SingUpScreen}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}