
import React from "react";

import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
} from "react-native";

import LoginForm from './LoginForm';

const LoginScreen=({navigation})=>{
    <View >
    <ImageBackground source={require('../../assets/images/Photo BG_small.jpg')} resizeMode="cover" imageStyle ={styles.image}>
        <View>

          <Text style={styles.text}>Увійти</Text>  
          <LoginForm/>


        </View>
      
    </ImageBackground>
  </View>

const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    image: {
      flex: 1,
      justifyContent: 'center',
    },
    text: {
      color: '#212121',
      fontSize: 30,
      lineHeight: 35.16,
      fontWeight: 500,
      textAlign: 'center',
    },

})};
export default LoginScreen;