import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { registerRootComponent } from 'expo';

import EntrarScreen from './src/screens/EntrarScreen';
import Planos from './src/screens/PlanoScreen';
import CadastrarScreen from './src/screens/CadastrarScreen';
import LoginScreen from './src/screens/LoginScreen';
import HomeScreen from './src/screens/HomeScreen';
import GuiaMedico from './src/screens/GuiaMedicoScreen';
import AgendamentoScreen from './src/screens/AgendamentoScreen';
import FormaDePagamento from './src/screens/FormaDePagamentoScreen';
import Pagamento from './src/screens/PagamentoScreen';
import Mensalidades from './src/screens/Mensalidades';
import Prontuario from './src/screens/Prontuario';
import Guia from './src/screens/guia';

import GlobalProvider from './src/services/context';

const Stack = createStackNavigator();



export default function App() {
  return (

    <GlobalProvider>

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
        name="Planos" 
        component={Planos} 
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

       <Stack.Screen
        name="FormaDePagamento"
        component={FormaDePagamento}
        options={{
          cardStyle:{height:'100%'},
          headerTitle:''
        }}/>

       <Stack.Screen
        name="Pagamento"
        component={Pagamento}
        options={{
          cardStyle:{height:'100%'},
          headerTitle:''
        }}/>

        <Stack.Screen
        name="Guia"
        component={Guia}
        options={{
          cardStyle:{height:'100%'},
          headerTitle:'Guia de Confirmação'
        }}/>


        <Stack.Screen 
        name="Mensalidades" 
        component={Mensalidades} 
        options={{
          headerShown: false,
          cardStyle:{height:'100%'},
          headerTitle:''
        }}/>

        <Stack.Screen 
        name="Prontuario" 
        component={Prontuario} 
        options={{
          headerShown: false,
          cardStyle:{height:'100%'},
          headerTitle:''
        }}/>
      </Stack.Navigator>
    </NavigationContainer>

    </GlobalProvider>

  )
}

registerRootComponent(App)