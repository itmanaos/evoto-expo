import { View, Text, KeyboardAvoidingView, TextInput, Pressable, StyleSheet } from 'react-native';
import React, { useState } from 'react';
import { sendPasswordResetEmail } from 'firebase/auth';
import { auth } from 'firebaseConfig';
import { router } from 'expo-router';
import EVotoLogo from '@/components/EVotoLogo';

export default function Newpass() {
  const [userEmail, setUserEmail] = useState('');

  function handleSubmit() {
    if (userEmail !== '') {
      sendPasswordResetEmail(auth, userEmail)
        .then(() => {
          alert('Foi enviado um email para: ' + userEmail + '. Verifique sua caixa de correio.');
          console.log('Email enviado com sucesso!');
          router.replace('/signin');
        })
        .catch((error) => {
          alert('É preciso informar um e-mail válido para efetuar a redefinição de senha.');
          console.log(error);
          return;
        });

      return;
    } else {
      alert('Informe o Email do Usuario!');
      return;
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
        <Text style={styles.errText}>Email ou Senha não conferem!</Text>
        <View style={styles.btnContainer}>
          <Pressable style={styles.btnSubmit} onPress={handleSubmit}>
            <Text style={styles.textBtn}>Redefinir Senha</Text>
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
    width: '90%',
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
