import React, { useState } from 'react';
import { StyleSheet, View, TextInput, Button, TouchableOpacity  } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const RegistrationForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigation = useNavigation();

  const handleRegistration = () => {
    // логика куда отправлять объект данных
  };

  return (
    <View>
      <TextInput
        placeholder="Логін"
        value={name}
        onChangeText={setName}
      />
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
        title="Зареєстуватися"
        onPress={handleRegistration}
      />
       <TouchableOpacity onPress={() => navigation.navigate('LoginScreen')}>
        <Text>Вже є акаунт? Увійти</Text>
      </TouchableOpacity>

    </View>
  );
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
};

export default RegistrationForm;