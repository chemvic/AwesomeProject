import React, { useState } from 'react';
import { StyleSheet, View, TextInput,  TouchableOpacity, Text  } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const RegistrationForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigation = useNavigation();

  const handleRegistration = () => {
    // логика куда отправлять объект данных
    console.log({name,email,password});
    setName ('');
    setEmail('');
    setPassword('');
  };

  return (
    <View style={styles.container}>
      <View style={styles.form}>
      <TextInput
         style={styles.input}
        placeholder="Логін"
        value={name}
        onChangeText={setName}
      />
      <TextInput style={styles.input}
        placeholder="Адреса електронної пошти"
        value={email}
        onChangeText={setEmail}
      />
      <TextInput style={styles.input}
        placeholder="Пароль"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      /> 
      </View>
      <TouchableOpacity style={styles.button} onPress={handleRegistration}>
  <Text style={styles.buttonText}>Зареєструватися</Text>
</TouchableOpacity>
       <TouchableOpacity onPress={() => navigation.navigate('LoginScreen')}>
        <Text style={styles.text}>Вже є акаунт? Увійти</Text>
      </TouchableOpacity>

    </View>
  );
 
};
 const styles = StyleSheet.create({
    container: {
      flex: 1,
     
      
      

    },
    text: {
        color: '#1B4371',
        fontSize: 16,
        textAlign: 'center',
      },
    input:{
        width:343,
        height: 50,
        padding: 16,
        fontSize: 16,
        fontFamily: 'Roboto',
        borderRadius: 8,
        backgroundColor: '#E8E8E8',
        
    },
    form:{
      gap: 16,
      marginBottom: 43,
      flex: 2,
    },
    button: {
      width: 343,
      height: 51,
      borderRadius: 100,
      backgroundColor: '#FF6C00',
      justifyContent: 'center',
      alignItems: 'center',
      marginBottom:16,
    },
    buttonText: {
      color: '#fff',
      textAlign: 'center',
      fontSize: 16,
      fontFamily: 'Roboto',
    },


})
export default RegistrationForm;