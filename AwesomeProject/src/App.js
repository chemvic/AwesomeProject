
import React from "react";
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import { useFonts } from 'expo-font';

import RegistrationScreen from './components/RegistrationScreen';
import LoginScreen from './components/LoginScreen';
import Home from './Screens/Home';
import PostsScreen from './Screens/PostsScreen';
import ProfileScreen from './Screens/ProfileScreen';
import CreatePostsScreen from './Screens/CreatePostsScreen';

const Stack = createNativeStackNavigator();


export default function App() {
  const [fontsLoaded] = useFonts({
    'Roboto': require('../assets/fonts/Roboto-Medium.ttf'),
    'Roboto': require('../assets/fonts/Roboto-Regular.ttf'),
  });

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="RegistrationScreen">
           <Stack.Screen name='RegistrationScreen' component={RegistrationScreen} options={{ headerTitle: "" }}/>
           <Stack.Screen name="LoginScreen" component={LoginScreen} options={{ headerTitle: "" }} />
                   <Stack.Screen name="Home" component={Home} options={{ headerTitle: "" }}/>

           <Stack.Screen name="PostsScreen" component={PostsScreen} />
           <Stack.Screen name="CreatePostsScreen" component={CreatePostsScreen} />
           <Stack.Screen name="ProfileScreen" component={ProfileScreen} /> 
                
      </Stack.Navigator>
    </NavigationContainer>
 );

}


