import {
  View,
  Text,
  StyleSheet,
  KeyboardAvoidingView,
  Pressable,
  ActivityIndicator,
} from 'react-native';
import React, { useState, useEffect } from 'react';
import { Stack, router } from 'expo-router';
import EVotoLogo from '@/components/EVotoLogo';
import WFCLogo from '@/components/WFCLogo';
import { Input } from '@/components/Input';
import { AuthUse } from '@/context/ctx';
import { ButtonSend } from '@/components/ButtonSend';

export default function Signin() {
  const [userEmail, setUserEmail] = useState('');
  const [userPassword, setUserPassword] = useState('');
  const [errorMessageShow, setErrorMessageShow] = useState(false);
  const [btnSend, setBtnSend] = useState(false);

  const { isLoading, logIn } = AuthUse();

  useEffect(() => {
    if (userPassword.length > 0 && userEmail.length > 0) {
      setBtnSend(true);
    } else {
      setBtnSend(false);
    }
  });

  function handleLogin() {
    if (userEmail === '' || userPassword === '') {
      setErrorMessageShow(true);
    } else {
      logIn(userEmail, userPassword);
    }
  }

  function replacePass() {
    router.push('(auth)/newpass');
  }

  function addUser() {
    router.push('(auth)/newuser');
  }

  return (
    <KeyboardAvoidingView style={styles.background}>
      <Stack.Screen
        options={{
          title: 'Signin',
          headerShown: false,
        }}
      />
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
        {errorMessageShow ? (
          <Text style={styles.errText}>Email ou Senha não podem ser vazios!</Text>
        ) : (
          <Text style={{ display: 'none' }}></Text>
        )}
        {isLoading ? (
          <ActivityIndicator size="large" color={'#939393'} />
        ) : (
          <ButtonSend title="Acessar" btnSend={btnSend} onPress={handleLogin} />
        )}
        <View style={styles.subButton}>
          <Pressable onPress={addUser}>
            <Text>Novo Usuario</Text>
          </Pressable>
          <Pressable onPress={replacePass}>
            <Text>Esqueceu a senha?</Text>
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
    color: '#ff0000',
    fontSize: 15,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
  },
  containerWfclogo: {
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
  },
});
