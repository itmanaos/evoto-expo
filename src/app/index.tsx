import { View, Text, KeyboardAvoidingView, Image, StyleSheet } from 'react-native';
import React from 'react';
import { Button } from '@/components/Button';
import { Stack, router } from 'expo-router';
import { AuthUse } from '@/context/ctx';

export default function index() {
  const { userData, globalLoading, token } = AuthUse();

  function handleSignIn() {
    if (userData) {
      router.replace('(tabs)/main/');
    } else {
      router.replace('(auth)/signin/');
    }
  }

  if (globalLoading)
    return (
      <View style={styles.background}>
        <Text>App carregando...</Text>
      </View>
    );
  return (
    <KeyboardAvoidingView style={styles.background}>
      <Stack.Screen
        options={{
          title: 'Bem Vindos',
          headerShown: false,
        }}
      />
      <View style={styles.containerLogo}>
        <Image source={require('src/assets/evoto.png')} />
      </View>
      <View style={styles.container}>
        <View style={styles.welcome}>
          <Text style={{ fontSize: 28, color: '#2FDBBC', fontWeight: 'bold' }}>Bem Vindo ao</Text>
          <Text style={{ fontSize: 28 }}>Sistema de Campanhas</Text>
        </View>
        <Button title="Acessar" color="#2FDBBC" onPress={handleSignIn} />
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
  btnSubmit: {
    backgroundColor: '#2FDBBC',
    width: '90%',
    flexDirection: 'row',
    gap: 20,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 6,
    padding: 10,
  },
  textSubmit: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#FFF',
  },
  welcome: {
    justifyContent: 'flex-end',
    alignItems: 'baseline',
    width: '90%',
    marginBottom: 20,
  },
  containerWfclogo: {
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
  },
});
