import { View, KeyboardAvoidingView, Text, Pressable } from 'react-native';
import React, { useState } from 'react';
import { auth } from 'firebaseConfig.js';
import { router } from 'expo-router';
import { signOut } from 'firebase/auth';
import { styles } from '../../../styles/styles';

export default function index() {
  const [isKeyboardVisible, setKeyboardVisible] = useState(false);
  const currentUser = auth.currentUser;

  const keyboardDidShow = () => {
    setKeyboardVisible(true);
  };
  const keyboardDidHide = () => {
    setKeyboardVisible(false);
  };
  if (currentUser == null) {
    alert('não logado');
    router.replace('/signin');
  }

  function logout() {
    signOut(auth)
      .then(() => {
        console.log('saiu');
        router.replace('/');
      })
      .catch((error) => {
        const errorMessage = error.errorMessage;
        console.log(errorMessage);
      });
  }

  return (
    <KeyboardAvoidingView>
      <View>
        <Pressable onPress={logout}>
          <Text style={styles.textLink}>Logout</Text>
        </Pressable>
      </View>
    </KeyboardAvoidingView>
  );
}
