import React from "react";
import { StyleSheet, Text, View,SafeAreaView , ImageBackground } from "react-native";
import RegistrationForm from './RegistrationForm';
import AddPhotoBlock from "./AddPhotoBlock";

const RegistrationScreen = ({ navigation }) => {
  return (
    <SafeAreaView  style={styles.container}>
      <ImageBackground
        source={require('../../assets/images/BG_small.jpg')}
        style={{ width: '100%', height: '100%' }}
      >
        <View style={{flex:1}}>
          <AddPhotoBlock />
          <Text style={styles.title}>Реєстрація</Text>
          <View style={{flex:2}}>
           <RegistrationForm/> 
          </View>
          
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    
    flexDirection: 'column',
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

export default RegistrationScreen;