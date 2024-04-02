import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import EntrarScreen from './src/screens/EntrarScreen';
import CadastrarScreen from './src/screens/CadastrarScreen';
import LoginScreen from './src/screens/LoginScreen';
import HomeScreen from './src/screens/HomeScreen';
import GuiaMedico from './src/screens/GuiaMedicoScreen';
import AgendamentoScreen from './src/screens/AgendamentoScreen';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        
        <Stack.Screen 
        name="Login" 
        component={LoginScreen} 
        options={{
          headerShown: false, 
          cardStyle: { height:'100%'}
          }}/>

        <Stack.Screen 
        name="Entrar" 
        component={EntrarScreen} 
        options={{
          cardStyle:{height:'100%'},
          headerTitle:''
          }}/>

        <Stack.Screen 
        name="Cadastrar" 
        component={CadastrarScreen} 
        options={{
          cardStyle:{height:'100%'},
          headerTitle:''
        }}/>

        <Stack.Screen 
        name="Home" 
        component={HomeScreen} 
        options={{
          headerShown: false, 
          cardStyle:{height:'100%'}
          }}/>
        
        <Stack.Screen 
        name="GuiaMedico" 
        component={GuiaMedico}
        options={{
          cardStyle:{height:'100%'},
          headerTitle:''
        }}
        />

        <Stack.Screen
        name="Agendamento"
        component={AgendamentoScreen}
        options={{
          cardStyle:{height:'100%'},
          headerTitle:''
        }}/>

      </Stack.Navigator>
    </NavigationContainer>

  );
}