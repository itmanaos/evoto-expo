import { View, Text, KeyboardAvoidingView, TextInput, StyleSheet, Pressable } from 'react-native';
import React, { useState } from 'react';
import EVotoLogo from '@/components/EVotoLogo';
import { router } from 'expo-router';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from 'firebaseConfig';

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
        <TextInput
          style={styles.input}
          placeholder="Informe o Email"
          autoCorrect={false}
          keyboardType="email-address"
          autoCapitalize="none"
          autoComplete="email"
          onChangeText={setUserEmail}
          value={userEmail}
        />
        <TextInput
          style={styles.input}
          placeholder="Digite sua Senha"
          autoCorrect={false}
          secureTextEntry
          value={userPassword}
          onChangeText={setUserPassword}
        />
        <TextInput
          style={styles.input}
          placeholder="Confirme sua Senha"
          autoCorrect={false}
          secureTextEntry
          value={userConfirm}
          onChangeText={setUserConfirm}
        />
        <Text style={styles.errText}>Email ou Senha não conferem!</Text>
        <View style={styles.btnContainer}>
          <Pressable style={styles.btnSubmit} onPress={handleNewUser}>
            <Text style={styles.textBtn}>Criar Novo Usuario</Text>
          </Pressable>
          <Pressable
            style={styles.btnCancel}
            onPress={() => {
              router.back();
            }}
          >
            <Text style={styles.textBtn}>Cancelar</Text>
          </Pressable>
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
  input: {
    backgroundColor: '#FFF',
    width: '90%',
    marginBottom: 15,
    color: '#222',
    fontSize: 17,
    borderRadius: 6,
    padding: 10,
  },
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    width: '90%',
    marginBottom: 50,
  },
  btnSubmit: {
    backgroundColor: '#2FDBBC',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
    borderRadius: 6,
  },
  textBtn: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#FFF',
  },
  btnCancel: {
    backgroundColor: '#ff0000',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
    borderRadius: 6,
  },
  btnContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    gap: 10,
  },
  errText: {
    color: 'red',
    fontSize: 15,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
    display: 'none',
  },
});
