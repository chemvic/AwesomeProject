
import React from "react";

import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
} from "react-native";

import LoginForm from './LoginForm';

const LoginScreen=({navigation})=>{
    return ( <View style={styles.container}>
    <ImageBackground
        source={require('../../assets/images/BG_small.jpg')}
        style={{ width: '100%', height: '100%' }}
      >
        <View>

          <Text style={styles.title}>Увійти</Text>  
          <LoginForm/>


        </View>
      
    </ImageBackground>
  </View>);

};

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    title: {
      color: '#212121',
      fontSize: 30,
      lineHeight: 35.16,
      fontWeight: 500,
      fontFamily: 'Roboto',
    },
  });
export default LoginScreen;