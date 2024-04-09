import { View, Text, KeyboardAvoidingView, Image, StyleSheet, Pressable } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import React from 'react';
import { Link } from 'expo-router';

export default function index() {
  return (
    <KeyboardAvoidingView style={styles.background}>
      <View style={styles.containerLogo}>
        <Image source={require('src/assets/evoto.png')} />
      </View>
      <View style={styles.container}>
        <Link href="/signin" asChild>
          <Pressable style={styles.btnSubmit}>
            <Text style={styles.textSubmit}>Acessar</Text>
            <MaterialIcons name="login" size={24} color="white" />
          </Pressable>
        </Link>
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
  containerWfclogo: {
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
  },
});
