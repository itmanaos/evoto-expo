import { View, Text, StyleSheet, KeyboardAvoidingView, Pressable } from 'react-native';
import React, { useContext, useState, useEffect } from 'react';
import { Redirect, Stack, router } from 'expo-router';
import EVotoLogo from '@/components/EVotoLogo';
import WFCLogo from '@/components/WFCLogo';
import { Button } from '@/components/Button';
import { Input } from '@/components/Input';
import { AuthContext } from '@/context/ctx';

export default function Signin() {
  const [userEmail, setUserEmail] = useState('');
  const [userPassword, setUserPassword] = useState('');
  const [errorMessageShow, setErrorMessageShow] = useState(false);
  const [btnSend, setBtnSend] = useState(false);

  const { userName, session, isLoading, signIn } = useContext(AuthContext);

  if (session != null) {
    return <Redirect href="(tabs)/main/" />;
  }

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
      signIn(userEmail, userPassword);
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

        {btnSend ? (
          <Button title="Acessar" color="#2FDBBC" onPress={handleLogin} />
        ) : (
          <Button title="Acessar" color="gray" onPress={() => {}} />
        )}

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
