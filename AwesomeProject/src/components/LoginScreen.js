
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
                <View style={{ flex: 1.5 }} />
        <View style={styles.formBlock}>
        <View style={styles.titleBlock}>
          <Text style={styles.title}>Увійти</Text>
         </View>   
          <View style={{flex:1}}>
                 <LoginForm/>
            </View>  

        </View>
      
    </ImageBackground>
  </View>);

};

const styles = StyleSheet.create({
    container: {
      
      justifyContent: 'center',
      alignItems: 'center',
    },
    titleBlock:{
      justifyContent: 'center',
     alignItems: 'center',
   },
    title: {
      color: '#212121',
      fontSize: 30,
      lineHeight: 35.16,
      fontWeight: 500,
      fontFamily: 'Roboto',
      marginBottom:32,
    },
    formBlock: {
      flex:2, 
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#FFF',
      borderTopLeftRadius: 25,
      borderTopRightRadius: 25,
      position: 'relative',
      paddingTop:32,
      paddingLeft: 16,
      paddingRight: 16,
      paddingBottom: 111,
    
      }
  });
export default LoginScreen;