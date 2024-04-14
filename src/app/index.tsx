import { View, Text, KeyboardAvoidingView, Image, StyleSheet } from 'react-native';
import React from 'react';
import { router } from 'expo-router';
import { Button } from '@/components/Button';

export default function index() {
  function handleSubmit() {
    return router.replace('/signin');
  }

  return (
    <KeyboardAvoidingView style={styles.background}>
      <View style={styles.containerLogo}>
        <Image source={require('src/assets/evoto.png')} />
      </View>
      <View style={styles.container}>
        <View style={styles.welcome}>
          <Text style={{ fontSize: 28, color: '#2FDBBC', fontWeight: 'bold' }}>Bem Vindo ao</Text>
          <Text style={{ fontSize: 28 }}>Sistema de Campanhas</Text>
        </View>
        <Button title="Acessar" color="#2FDBBC" onPress={handleSubmit} />
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
