import React from "react";
import { StyleSheet,TouchableWithoutFeedback, Keyboard,  Text, View,SafeAreaView , ImageBackground } from "react-native";
import RegistrationForm from './RegistrationForm';
import AddPhotoBlock from "./AddPhotoBlock";

const RegistrationScreen = ({ navigation }) => {
  return (
    <View  style={styles.container}> 
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
<View>
      <ImageBackground
        source={require('../../assets/images/BG_small.jpg')}
        style={{ width: '100%', height: '100%' }}
      >
        <View style={{ flex: 1 }} />
        <View style={styles.formBlock}>
        <View style={styles.addPhotoBlockContainer}>
          <AddPhotoBlock />
        </View>  
        <View style={styles.titleBlock}>
          <Text style={styles.title}>Реєстрація</Text>
          </View>
          <View style={{ flex: 1 }}>
           <RegistrationForm/> 
          </View>
          
        </View>
      </ImageBackground>
      </View>
      </TouchableWithoutFeedback>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  titleBlock:{
    
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
  paddingTop:92,
  paddingLeft: 16,
  paddingRight: 30,
  paddingBottom: 45,
  }, 
  addPhotoBlockContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',  
    top:'-15%',
  }
});

export default RegistrationScreen;