import React, { useState } from 'react';
import { StyleSheet, View, TextInput, Button, TouchableOpacity, Text  } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigation = useNavigation();

  const handleLogin = () => {
    // логика куда отправлять объект данных
    console.log({email,password});
    setEmail('');
    setPassword('');
  };

  return (
    <View style={styles.container}>
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
      <Button 
        style={styles.button}
        title="Увійти"
        onPress={handleLogin}
      />
      <Text style={styles.text}>Немає акаунту?</Text>
       <TouchableOpacity onPress={() => navigation.navigate('RegistrationScreen')}>
        <Text style={[styles.text, styles.underline]}> Зареєструватися</Text>
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
    underline:{
        textDecorationLine: 'underline',
    },
    input:{
        width:343,
        height: 50,
        padding: "16px 16px 15px 16px",
        fontSize: 16,
        fontFamily: 'Roboto',

    },
    button:{
        width:343,
        height:51,
        borderRadius: 100,
        backgroundColor: '#FF6C00',
        color: '#fff',
        textAlign: 'center',
        fontSize: 16,
        fontFamily: 'Roboto',
        padding: "16px 0",

    }

})
export default LoginForm;