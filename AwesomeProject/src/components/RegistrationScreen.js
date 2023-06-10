
import React from "react";

import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
} from "react-native";

import RegistrationForm from './RegistrationForm';
// import AddPhotoBlock from "./AddPhotoBlock";resizeMode="cover" imageStyle ={styles.image}

const RegistrationScreen=({navigation})=>{
    <View style={{flex: 1}}>
    <ImageBackground source={require('../../assets/images/Photo BG_small.jpg')} style={{ width: '100%', height: '100%' }}>
        <View>
          {/* <AddPhotoBlock/> */}
          <Text >Реєстрація</Text>  
          <RegistrationForm/>
        </View>
      
    </ImageBackground>
  </View>

const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    // text: {
    //   color: '#212121',
    //   fontSize: 30,
    //   lineHeight: 35.16,
    //   fontWeight: 500,
    //   textAlign: 'center',
    // },

})};
export default RegistrationScreen;