import { View, KeyboardAvoidingView, Text, Pressable } from 'react-native';
import React, { useState } from 'react';
import { Link, Redirect, router } from 'expo-router';
import { getAuth, signOut } from 'firebase/auth';
import { styles } from '@/styles/styles';

export default function Dashboard() {
  const auth = getAuth();
  const currentUser = auth.currentUser;

  if (currentUser == null) {
    return <Redirect href="/Signin" />;
  }

  function logout() {
    signOut(auth)
      .then(() => {
        router.push('/');
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
        <Link style={styles.textLink} href={'/atividades'}>
          Atividades
        </Link>
        <Link style={styles.textLink} href={'/ocorrencias'}>
          Ocorrencias
        </Link>
        <Link style={styles.textLink} href={'/pesquisa'}>
          Pesquisa
        </Link>
        <Link style={styles.textLink} href={'/pesquisa/detalhe'}>
          Pesquisa
        </Link>
        <Link style={styles.textLink} href={'/equipes'}>
          Equipes
        </Link>
        <Link style={styles.textLink} href={'/equipes/agenda'}>
          Equipes
        </Link>
        <Link style={styles.textLink} href={'/urnas'}>
          Urnas
        </Link>
      </View>
    </KeyboardAvoidingView>
  );
}
