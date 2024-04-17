import { View, Text, KeyboardAvoidingView, TextInput, Pressable, StyleSheet } from 'react-native';
import React, { useEffect, useState } from 'react';
import { sendPasswordResetEmail } from 'firebase/auth';
import { auth } from 'firebaseConfig';
import { router } from 'expo-router';
import EVotoLogo from '@/components/EVotoLogo';
import { Input } from '@/components/Input';
import { Button } from '@/components/Button';

export default function Newpass() {
  const [userEmail, setUserEmail] = useState('');
  const [btnSend, setBtnSend] = useState(false);

  useEffect(() => {
    if (userEmail.length > 0) {
      setBtnSend(true);
    } else {
      setBtnSend(false);
    }
  });

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
        <Input
          placeholder="Informe o Email"
          autoCorrect={false}
          keyboardType="email-address"
          autoCapitalize="none"
          autoComplete="email"
          onChangeText={setUserEmail}
          value={userEmail}
        />
        <View style={styles.btnContainer}>
          {btnSend ? (
            <Button title="Redefinir" color="#2FDBBC" onPress={handleSubmit} />
          ) : (
            <Button title="Redefinir" color="gray" onPress={() => {}} />
          )}

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
