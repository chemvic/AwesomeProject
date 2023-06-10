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
      <TextInput
        placeholder="Адреса електронної пошти"
        value={email}
        onChangeText={setEmail}
      />
      <TextInput
        placeholder="Пароль"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />
      <Button
        title="Увійти"
        onPress={handleLogin}
      />
      <Text>Немає акаунту?</Text>
       <TouchableOpacity onPress={() => navigation.navigate('RegistrationScreen')}>
        <Text style={styles.text}> Зареєструватися</Text>
      </TouchableOpacity>

    </View>
  );

};
  const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    text: {
      color: '#212121',
      fontSize: 30,
      lineHeight: 35.16,
      fontWeight: 500,
      textAlign: 'center',
    },

})
export default LoginForm;