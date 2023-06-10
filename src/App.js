
import React from "react";
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import { useFonts } from 'expo-font';

import RegistrationScreen from './components/RegistrationScreen';
import LoginScreen from './components/LoginScreen';

const Stack = createNativeStackNavigator();


export default function App() {
  const [fontsLoaded] = useFonts({
    'Roboto': require('../assets/fonts/Roboto-Medium.ttf'),
    'Roboto': require('../assets/fonts/Roboto-Regular.ttf'),
  });

  return (
    <NavigationContainer>
      <Stack.Navigator>
           <Stack.Screen name='RegistrationScreen' component={RegistrationScreen}/>
           <Stack.Screen name="LoginScreen" component={LoginScreen} />
         
          
          
      
      </Stack.Navigator>
    </NavigationContainer>
 );

}


