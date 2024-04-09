import {
  View,
  Image,
  Text,
  StyleSheet,
  KeyboardAvoidingView,
  Pressable,
  TextInput,
} from 'react-native';
import React, { useState } from 'react';
import { auth } from 'src/app/firebaseConfig.js';
import { signInWithEmailAndPassword } from 'firebase/auth';

export default function index() {
  const [userEmail, setUserEmail] = useState('');
  const [userPassword, setUserPassword] = useState('');
  function handleLogin() {
    signInWithEmailAndPassword(auth, userEmail, userPassword)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log(user);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(error);
      });
  }

  return (
    <KeyboardAvoidingView style={styles.background}>
      <View style={styles.containerLogo}>
        <Image source={require('src/assets/evoto.png')} />
      </View>
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
          placeholder="Senha"
          autoCorrect={false}
          secureTextEntry
          value={userPassword}
          onChangeText={setUserPassword}
        />
        <Text style={styles.errText}>Email ou Senha não conferem!</Text>
        <Pressable style={styles.btnSubmit} onPress={handleLogin}>
          <Text style={styles.textSubmit}>Acessar</Text>
        </Pressable>
        <View style={styles.subButton}>
          <Pressable>
            <Text style={styles.textSubButton}>Novo Usuario</Text>
          </Pressable>
          <Pressable>
            <Text style={styles.textSubButton}>Esqueceu a senha?</Text>
          </Pressable>
        </View>
      </View>
      <View style={styles.containerWfclogo}>
        <Image source={require('src/assets/wfclogo.png')} />
      </View>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#F0f0f0',
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
