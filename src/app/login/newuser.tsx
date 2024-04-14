import { View, Text, KeyboardAvoidingView, TextInput, StyleSheet, Pressable } from 'react-native';
import React, { useState } from 'react';
import EVotoLogo from '@/components/EVotoLogo';
import { router } from 'expo-router';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from 'firebaseConfig';
import { Input } from '@/components/Input';
import { Button } from '@/components/Button';

export default function Newuser() {
  const [userEmail, setUserEmail] = useState('');
  const [userPassword, setUserPassword] = useState('');
  const [userConfirm, setUserConfirm] = useState('');

  function handleNewUser() {
    if (userEmail === '' || userPassword === '' || userConfirm === '') {
      alert('Preencha todos os dados!');
    } else if (userPassword !== userConfirm) {
      alert('As senhas não conferem!');
    } else {
      createUserWithEmailAndPassword(auth, userEmail, userPassword)
        .then((UserCredencial) => {
          const user = UserCredencial.user;
          alert('O Usuario ' + userEmail + ' foi criado. ');
          router.replace('/signin');
        })
        .catch((error) => {
          alert(error.message);
        });
    }
  }

  return (
    <KeyboardAvoidingView style={styles.background}>
      <EVotoLogo />
      <View style={styles.container}>
        <Input
          placeholder="Informe o Email"
          autoCorrect={false}
          keyboardType="email-address"
          autoCapitalize="none"
          autoComplete="email"
          onChangeText={setUserEmail}
          value={userEmail}
        />

        <Input
          placeholder="Digite sua Senha"
          autoCorrect={false}
          secureTextEntry
          value={userPassword}
          onChangeText={setUserPassword}
        />
        <Input
          placeholder="Confirme sua Senha"
          autoCorrect={false}
          secureTextEntry
          value={userConfirm}
          onChangeText={setUserConfirm}
        />

        <View style={styles.btnContainer}>
          <Button title="Criar" color="#2FDBBC" onPress={handleNewUser} />
          <Button
            title="Cancelar"
            color="#db2f32"
            onPress={() => {
              router.back();
            }}
          />
        </View>
      </View>
    </KeyboardAvoidingView>
  );
}
const styles = StyleSheet.create({
  background: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#e1e1e1',
  },
  containerLogo: {
    flex: 1,
    justifyContent: 'center',
  },
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    width: '90%',
    marginBottom: 50,
  },
  btnContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
  },
});
