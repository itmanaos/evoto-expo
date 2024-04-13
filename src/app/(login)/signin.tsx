import { View, Text, StyleSheet, KeyboardAvoidingView, Pressable } from 'react-native';
import React, { useState } from 'react';
import { auth } from 'firebaseConfig.js';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { router } from 'expo-router';
import EVotoLogo from '@/components/EVotoLogo';
import WFCLogo from '@/components/WFCLogo';
import { Button } from '@/components/Button';
import { Input } from '@/components/Input';

export default function Signin() {
  const [userEmail, setUserEmail] = useState('');
  const [userPassword, setUserPassword] = useState('');
  const [showAppOptions, setShowAppOptions] = useState(false);

  const currentUser = auth.currentUser;

  if (currentUser != null) {
    router.replace('/dashboard');
  }

  function handleLogin() {
    if (userEmail === '' || userPassword === '') {
      alert('Preencha todos os dados!');
    } else {
      login();
    }
  }

  function login() {
    signInWithEmailAndPassword(auth, userEmail, userPassword)
      .then((userCredential) => {
        const user = userCredential.user;
        if (user) {
          console.log('Usuário logado');
          router.replace('/dashboard');
        }
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(error);
      });
  }

  function replacePass() {
    router.push('/newpass');
  }

  function addUser() {
    router.push('/newuser');
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
          placeholder="Senha"
          autoCorrect={false}
          secureTextEntry
          value={userPassword}
          onChangeText={setUserPassword}
        />
        <Text style={styles.errText}>Email ou Senha não conferem!</Text>

        <Button title="Acessar" color="#2FDBBC" onPress={handleLogin} />

        <View style={styles.subButton}>
          <Pressable onPress={addUser}>
            <Text style={styles.textSubButton}>Novo Usuario</Text>
          </Pressable>
          <Pressable onPress={replacePass}>
            <Text style={styles.textSubButton}>Esqueceu a senha?</Text>
          </Pressable>
        </View>
      </View>

      <WFCLogo />
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
    width: '90%',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
    borderRadius: 6,
  },
  textSubmit: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#FFF',
  },
  subButton: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '90%',
    marginTop: 10,
  },
  textSubButton: {
    color: '#2FDBBC',
    fontSize: 15,
    fontWeight: 'bold',
  },
  errText: {
    color: 'red',
    fontSize: 15,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
    display: 'none',
  },
  containerWfclogo: {
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
  },
});
